import { useState } from 'react';
import '../index.css';

function LoginForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [rememberMe, setRememberMe] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

   
    return (
        <div >
            <div className="mx-auto max-w-md p-6 bg-white shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block">Username:</label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500" />
                    </div>
                    <br />
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email:</label>
                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-6 py-2 mt-1 focus:outline-none focus:border-red-500" />
                    </div>
                    <br />
                    <div className="mb-4">
                        <label htmlFor="password" className="block">Password:</label>
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500" />
                    </div>
                    <br />
                    <div className="mb-4 flex items-center">
                        <input type="checkbox"
                            name="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="/forgot-password" className="block mb-4 text-red-500">Forgot Password</a>
                    <div className="flex justify-between items-center">
                        <span>Don&apos;t have an account?</span>
                        <a href="/register" className="text-red-500">Register</a>
                    </div>
                    <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;