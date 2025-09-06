import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import { supabase } from '@/lib/services/supabaseClient';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

   
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Intentamos iniciar sesión con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) {
        setError("Credenciales incorrectas");
        return;
    }

    if (data?.session) {
        // Supabase maneja la sesión automáticamente, pero también puedes guardar algo en localStorage si quieres
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Inicio de sesión exitoso 🎉");
        onClose();
    }
};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setError('');
    };

    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <dialog open={isOpen} 
                className="bg-gradient-to-r p-2 from-pink-600 to-purple-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
                <div className="p-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className='flex flex-col gap-2 mt-2'>
                        <h2 className="text-2xl font-bold text-white">
                            Iniciar Sesión
                        </h2>
                        <p className="text-white/90">
                            Accede a tu cuenta para publicar productos
                        </p>
                       
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="px-6 space-y-4 mb-6">
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-5 text-white placeholder:text-white/80 border border-pink-300 rounded-lg"
                        placeholder="Email"
                        required
                    />

                    <div className="relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full p-5 text-white placeholder:text-white/80 border border-pink-300 rounded-lg"
                            placeholder="Contraseña"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    {error && (
                        <div
                            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl"
                        >
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={false}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enviar
                    </button>
                </form>
            </dialog>
        </section>
    );
};

export default AuthModal;