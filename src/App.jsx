import { motion } from 'framer-motion';
import { 
  Download, 
  Key, 
  Shield, 
  Eye, 
  Zap, 
  Target, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Crown
} from 'lucide-react';
import './App.css';

function App() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Aimbot",
      description: "Pixel-perfect aim assistance with customizable FOV and smoothness settings"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "ESP/Wallhacks",
      description: "See enemies through walls with customizable colors and information display"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Triggerbot",
      description: "Automatic shooting when crosshair is on target with adjustable delay"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Anti-Detection",
      description: "Advanced bypass technology to avoid detection systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Features",
      description: "Team ESP, friendly fire toggle, and squad coordination tools"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Support",
      description: "24/7 Discord support and regular updates with new features"
    }
  ];

  const stats = [
    { number: "5K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "0", label: "Bans" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              EdgyHacks
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">Features</a>
            <a href="#download" className="text-gray-300 hover:text-red-500 transition-colors">Download</a>
            <a href="#support" className="text-gray-300 hover:text-red-500 transition-colors">Support</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                DOMINATE
              </span>
              <br />
              <span className="text-white">VALORANT</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most advanced Valorant cheat with undetectable technology, 
              premium features, and 24/7 support. Join thousands of players 
              who trust EdgyHacks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
               <a href="https://mega.nz/file/87IlgAyQ#taIG3YfhifB2YxWqFupAgvYiISZTA6elOMoez49Dluk" target='_blank'><span>Download Now</span></a>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
              <Key className="w-5 h-5" />
                <a href="https://www.patreon.com/posts/edgyhacks-keys-135604743?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target='_blank'><span>Get Key</span></a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced tools designed to give you the competitive edge in every match
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the elite players who trust EdgyHacks for their competitive advantage
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Cheat</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Key className="w-5 h-5" />
                  <span>Get License Key</span>
                </motion.button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Undetectable</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Premium Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-purple-600 rounded flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              EdgyHacks
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            The most advanced Valorant cheat on the market
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Discord</a>
            <a href="#" className="hover:text-red-500 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
