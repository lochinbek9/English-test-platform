import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate, useNavigate } from 'react-router-dom';


const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    
    const login = (username) => setUser({ username });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => React.useContext(AuthContext);

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    Platform
                </div>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                            <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
                            <Link to="/test" className="text-white hover:text-gray-300">Test</Link>
                            <Link to="/settings" className="text-white hover:text-gray-300">Settings</Link>
                            <button 
                                onClick={handleLogout}
                                className="text-white hover:text-gray-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username) {
            login(username);
            navigate('/dashboard');
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-2xl mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

const Dashboard = () => (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
    </div>
);

const Products = () => (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Products</h1>
        <div className="flex space-x-4 mb-4">
            <Link to="sub-product1" className="text-blue-500 hover:underline">Sub-Product 1</Link>
            <Link to="sub-product2" className="text-blue-500 hover:underline">Sub-Product 2</Link>
        </div>
        <Outlet />
    </div>
);

const SubProduct1 = () => <div className="p-4 border rounded">Sub-Product 1 Details</div>;
const SubProduct2 = () => <div className="p-4 border rounded">Sub-Product 2 Details</div>;

const Test = () => {
    const questions = [
        {
            "id": 1,
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "correct": "Paris"
        },
        {
            "id": 2,
            "question": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"],
            "correct": "4"
        },
        {
            "id": 3,
            "question": "Which planet is known as the Red Planet?",
            "options": ["Venus", "Mars", "Jupiter", "Saturn"],
            "correct": "Mars"
        },
        {
            "id": 4,
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            "correct": "William Shakespeare"
        },
        {
            "id": 5,
            "question": "What is the largest ocean on Earth?",
            "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            "correct": "Pacific Ocean"
        },
        {
            "id": 6,
            "question": "What is the chemical symbol for water?",
            "options": ["H2O", "CO2", "NaCl", "O2"],
            "correct": "H2O"
        },
        {
            "id": 7,
            "question": "Which country is known as the Land of the Rising Sun?",
            "options": ["China", "Japan", "Korea", "Thailand"],
            "correct": "Japan"
        },
        {
            "id": 8,
            "question": "What is the square root of 16?",
            "options": ["2", "4", "6", "8"],
            "correct": "4"
        },
        {
            "id": 9,
            "question": "Who painted the Mona Lisa?",
            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "correct": "Leonardo da Vinci"
        },
        {
            "id": 10,
            "question": "What is the smallest prime number?",
            "options": ["1", "2", "3", "5"],
            "correct": "2"
        },
        {
            "id": 11,
            "question": "Which gas is most abundant in Earth's atmosphere?",
            "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            "correct": "Nitrogen"
        },
        {
            "id": 12,
            "question": "What is the capital of Brazil?",
            "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            "correct": "Brasília"
        },
        {
            "id": 13,
            "question": "Who discovered penicillin?",
            "options": ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"],
            "correct": "Alexander Fleming"
        },
        {
            "id": 14,
            "question": "What is 5 factorial (5!)?",
            "options": ["120", "60", "24", "720"],
            "correct": "120"
        },
        {
            "id": 15,
            "question": "Which animal is the fastest land animal?",
            "options": ["Lion", "Cheetah", "Horse", "Leopard"],
            "correct": "Cheetah"
        },
        {
            "id": 16,
            "question": "What is the longest river in the world?",
            "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
            "correct": "Nile"
        },
        {
            "id": 17,
            "question": "Which element has the atomic number 1?",
            "options": ["Helium", "Hydrogen", "Lithium", "Beryllium"],
            "correct": "Hydrogen"
        },
        {
            "id": 18,
            "question": "Who was the first person to walk on the moon?",
            "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
            "correct": "Neil Armstrong"
        },
        {
            "id": 19,
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
            "correct": "Canberra"
        },
        {
            "id": 20,
            "question": "What is the value of π (pi) to two decimal places?",
            "options": ["3.12", "3.14", "3.16", "3.18"],
            "correct": "3.14"
        },
        {
            "id": 21,
            "question": "Which country hosted the 2016 Summer Olympics?",
            "options": ["China", "Brazil", "UK", "Japan"],
            "correct": "Brazil"
        },
        {
            "id": 22,
            "question": "What is the chemical symbol for gold?",
            "options": ["Au", "Ag", "Fe", "Cu"],
            "correct": "Au"
        },
        {
            "id": 23,
            "question": "Who wrote 'Pride and Prejudice'?",
            "options": ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Virginia Woolf"],
            "correct": "Jane Austen"
        },
        {
            "id": 24,
            "question": "What is the capital of Canada?",
            "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            "correct": "Ottawa"
        },
        {
            "id": 25,
            "question": "What is 10% of 200?",
            "options": ["10", "20", "30", "40"],
            "correct": "20"
        },
        {
            "id": 26,
            "question": "Which planet is closest to the Sun?",
            "options": ["Venus", "Earth", "Mercury", "Mars"],
            "correct": "Mercury"
        },
        {
            "id": 27,
            "question": "Who invented the telephone?",
            "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
            "correct": "Alexander Graham Bell"
        },
        {
            "id": 28,
            "question": "What is the largest mammal in the world?",
            "options": ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
            "correct": "Blue Whale"
        },
        {
            "id": 29,
            "question": "What is the capital of Egypt?",
            "options": ["Cairo", "Alexandria", "Giza", "Luxor"],
            "correct": "Cairo"
        },
        {
            "id": 30,
            "question": "What is the cube of 3?",
            "options": ["9", "27", "81", "243"],
            "correct": "27"
        },
        {
            "id": 31,
            "question": "Which gas is used in balloons to make them float?",
            "options": ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
            "correct": "Helium"
        },
        {
            "id": 32,
            "question": "Who was the first female Nobel Prize winner?",
            "options": ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
            "correct": "Marie Curie"
        },
        {
            "id": 33,
            "question": "What is the capital of Russia?",
            "options": ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],
            "correct": "Moscow"
        },
        {
            "id": 34,
            "question": "What is the boiling point of water in Celsius?",
            "options": ["0°C", "50°C", "100°C", "150°C"],
            "correct": "100°C"
        },
        {
            "id": 35,
            "question": "Which country is the largest by land area?",
            "options": ["China", "United States", "Russia", "Canada"],
            "correct": "Russia"
        },
        {
            "id": 36,
            "question": "What is 7 × 8?",
            "options": ["48", "56", "64", "72"],
            "correct": "56"
        },
        {
            "id": 37,
            "question": "Who is the author of '1984'?",
            "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
            "correct": "George Orwell"
        },
        {
            "id": 38,
            "question": "What is the capital of South Africa?",
            "options": ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
            "correct": "Pretoria"
        },
        {
            "id": 39,
            "question": "Which element is a noble gas?",
            "options": ["Neon", "Nitrogen", "Sodium", "Sulfur"],
            "correct": "Neon"
        },
        {
            "id": 40,
            "question": "What is the perimeter of a square with a side length of 5?",
            "options": ["15", "20", "25", "30"],
            "correct": "20"
        },
        {
            "id": 41,
            "question": "Which country won the FIFA World Cup in 2018?",
            "options": ["Germany", "Brazil", "France", "Argentina"],
            "correct": "France"
        },
        {
            "id": 42,
            "question": "What is the capital of India?",
            "options": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            "correct": "Delhi"
        },
        {
            "id": 43,
            "question": "Who developed the theory of relativity?",
            "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            "correct": "Albert Einstein"
        },
        {
            "id": 44,
            "question": "What is the area of a circle with radius 3? (Use π = 3.14)",
            "options": ["18.84", "28.26", "37.68", "56.52"],
            "correct": "28.26"
        },
        {
            "id": 45,
            "question": "Which animal is known for its black and white stripes?",
            "options": ["Tiger", "Zebra", "Leopard", "Cheetah"],
            "correct": "Zebra"
        },
        {
            "id": 46,
            "question": "What is the capital of China?",
            "options": ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
            "correct": "Beijing"
        },
        {
            "id": 47,
            "question": "Who composed the 'Moonlight Sonata'?",
            "options": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Frédéric Chopin"],
            "correct": "Ludwig van Beethoven"
        },
        {
            "id": 48,
            "question": "What is 15 ÷ 3?",
            "options": ["3", "4", "5", "6"],
            "correct": "5"
        },
        {
            "id": 49,
            "question": "Which continent is the Sahara Desert located on?",
            "options": ["Asia", "Africa", "Australia", "South America"],
            "correct": "Africa"
        },
        {
            "id": 50,
            "question": "What is the chemical symbol for iron?",
            "options": ["Fe", "Ir", "In", "Io"],
            "correct": "Fe"
        },
        {
            "id": 51,
            "question": "What is the capital of Germany?",
            "options": ["Munich", "Hamburg", "Berlin", "Frankfurt"],
            "correct": "Berlin"
        },
        {
            "id": 52,
            "question": "Who was the first president of the United States?",
            "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
            "correct": "George Washington"
        },
        {
            "id": 53,
            "question": "What is the freezing point of water in Celsius?",
            "options": ["0°C", "32°C", "100°C", "-10°C"],
            "correct": "0°C"
        },
        {
            "id": 54,
            "question": "Which country is known for the Eiffel Tower?",
            "options": ["Italy", "France", "Spain", "United Kingdom"],
            "correct": "France"
        },
        {
            "id": 55,
            "question": "What is the sum of angles in a triangle?",
            "options": ["90°", "180°", "270°", "360°"],
            "correct": "180°"
        },
        {
            "id": 56,
            "question": "Who wrote 'The Great Gatsby'?",
            "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
            "correct": "F. Scott Fitzgerald"
        },
        {
            "id": 57,
            "question": "What is the capital of Argentina?",
            "options": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
            "correct": "Buenos Aires"
        },
        {
            "id": 58,
            "question": "Which gas is essential for human respiration?",
            "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
            "correct": "Oxygen"
        },
        {
            "id": 59,
            "question": "What is 12 × 12?",
            "options": ["124", "134", "144", "154"],
            "correct": "144"
        },
        {
            "id": 60,
            "question": "Which mountain is the highest in the world?",
            "options": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            "correct": "Mount Everest"
        }
    ]

    const [answers, setAnswers] = React.useState({});
    const [score, setScore] = React.useState(null);

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correct) {
                correctCount++;
            }
        });
        setScore(correctCount);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Test</h1>
            {score !== null ? (
                <div className="p-4 bg-green-100 rounded">
                    <h2 className="text-xl">Your Score: {score} / {questions.length}</h2>
                    <button
                        onClick={() => {
                            setScore(null);
                            setAnswers({});
                        }}
                        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retake Test
                    </button>
                </div>
            ) : (
                <div>
                    {questions.map((q) => (
                        <div key={q.id} className="mb-6 p-4 border rounded">
                            <h3 className="text-lg font-semibold">{q.question}</h3>
                            <div className="mt-2 space-y-2">
                                {q.options.map((option) => (
                                    <label key={option} className="block">
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={option}
                                            checked={answers[q.id] === option}
                                            onChange={() => handleAnswer(q.id, option)}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={handleSubmit}
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit Test
                    </button>
                </div>
            )}
        </div>
    );
};

const Settings = () => (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Settings</h1>
        <p>Manage your account settings here.</p>
    </div>
);

const MultiLevel = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <ProtectedRoute>
                                <Products />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="sub-product1" element={<SubProduct1 />} />
                        <Route path="sub-product2" element={<SubProduct2 />} />
                    </Route>
                    <Route
                        path="/test"
                        element={
                            <ProtectedRoute>
                                <Test />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};


export default MultiLevel;