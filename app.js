const { useState, useEffect } = React;

function App() {
    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);

    useEffect(() => {
        setCases(MOCK_DATA.cases);
    }, []);

    const handleSelectCase = (caseItem) => {
        setSelectedCase(caseItem);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">LexiCase Dashboard</h1>
                <p className="text-gray-400 mt-2">Manage your legal cases efficiently with automated tools.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Active Cases</h2>
                        <div className="space-y-4">
                            {cases.map(caseItem => (
                                <div 
                                    key={caseItem.id} 
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${selectedCase && selectedCase.id === caseItem.id ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500' : 'bg-gray-800/30 hover:bg-gray-700/50'}`}
                                    onClick={() => handleSelectCase(caseItem)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-medium">{caseItem.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm ${caseItem.status === 'Active' ? 'bg-green-900/50 text-green-300' : 'bg-yellow-900/50 text-yellow-300'}`}>
                                            {caseItem.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 mt-2">{caseItem.description}</p>
                                    <div className="flex justify-between mt-4 text-sm text-gray-500">
                                        <span>Client: {caseItem.client}</span>
                                        <span>Deadline: {caseItem.deadline}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Case Details</h2>
                        {selectedCase ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">{selectedCase.title}</h3>
                                <p className="text-gray-300">{selectedCase.description}</p>
                                <div className="space-y-2">
                                    <p><strong>Client:</strong> {selectedCase.client}</p>
                                    <p><strong>Status:</strong> <span className={`px-2 py-1 rounded ${selectedCase.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>{selectedCase.status}</span></p>
                                    <p><strong>Deadline:</strong> {selectedCase.deadline}</p>
                                    <p><strong>Documents:</strong> {selectedCase.documents} files</p>
                                </div>
                                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-300">Generate Document</button>
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">Select a case to view details.</p>
                        )}
                    </div>
                    <div className="mt-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-gray-700/50 text-gray-200 rounded-xl hover:bg-gray-600/50 transition-colors duration-300">Add New Case</button>
                            <button className="w-full py-3 bg-gray-700/50 text-gray-200 rounded-xl hover:bg-gray-600/50 transition-colors duration-300">Upload Document</button>
                            <button className="w-full py-3 bg-gray-700/50 text-gray-200 rounded-xl hover:bg-gray-600/50 transition-colors duration-300">Message Client</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);