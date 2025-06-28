import React from 'react';
import { Send, CheckCircle, X, User, Mail } from 'lucide-react';
import MattProfile from '../assets/images/matt-with-laptop.jpg'

export default function ChatDrawer({ isOpen, onClose }) {
    const [formData, setFormData] = React.useState({ fullName: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: name === 'message' ? value.slice(0, 500) : value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const err = {};
        if (!formData.fullName.trim()) err.fullName = 'Full name is required';
        if (!formData.email.trim()) err.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = 'Invalid email';
        if (!formData.message.trim()) err.message = 'Message is required';
        else if (formData.message.trim().length < 10) err.message = 'Min 10 characters';
        return err;
    };

    const handleSubmit = () => {
        const err = validateForm();
        if (Object.keys(err).length) return setErrors(err);

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setFormData({ fullName: '', email: '', message: '' });
                setIsSubmitted(false);
                onClose();
            }, 3000);
        }, 1500);
    };

    const drawerContent = (
        <div className="p-4 space-y-4 max-h-[calc(100%-4rem)] overflow-y-auto">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                    <CheckCircle className="w-12 h-12 text-green-500 mb-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Message Sent!</h3>
                    <p className="text-sm text-gray-600">I'll get back to you shortly.</p>
                </div>
            ) : (
                <>
                    <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
                        👋 Hi! I'm Matt, a System Developer for ERP systems. How can I help?
                    </div>

                    {/* Full Name */}
                    <div>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className={`w-full pl-10 pr-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={`w-full pl-10 pr-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            rows={10}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className={`w-full p-3 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                }`}
                        />
                        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                        <p className="text-xs text-gray-500 text-right">{formData.message.length}/500</p>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full py-2 rounded-lg text-white flex items-center justify-center transition-colors ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-400 cursor-pointer'
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full mr-2" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </>
                        )}
                    </button>
                </>
            )}
        </div>
    );

    return (
        <>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
                />
            )}

            {/* Mobile Drawer */}
            <aside
                className={`pb-[50px] fixed z-100 bg-white w-full h-[70vh] bottom-0 left-0 rounded-t-2xl shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-[#C8102E] text-white p-4 flex justify-between items-center rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="border-2 border-green-500 h-[50px] w-[50px] rounded-full overflow-hidden">
                            <img src={MattProfile} className="w-[50px] h-[50px] object-center object-cover" />
                        </div>
                        <div>
                            <p className="text-[25px] font-semibold">Matt Gernale</p>
                            <p className="text-[15px] text-blue-100">matthewgernale26@gmail.com</p>
                        </div>
                    </div>
                    <button onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {drawerContent}
            </aside>

            {/* Desktop Drawer */}
            <aside
                className={`fixed z-50 bg-white w-[700px] h-full right-0 top-0 rounded-none shadow-2xl transition-transform duration-300 ease-in-out hidden md:block ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="bg-[#C8102E] text-white p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="border-2 border-green-500 h-[70px] w-[70px] rounded-full overflow-hidden">
                            <img src={MattProfile} className="w-[70px] h-[70px] object-center object-cover" />
                        </div>
                        <div>
                            <p className="text-[25px] font-semibold">Matt Gernale</p>
                            <p className="text-[15px] text-blue-100">matthewgernale26@gmail.com</p>
                        </div>
                    </div>
                    <button onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {drawerContent}
            </aside>
        </>
    );
}
