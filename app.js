// --- E-Learning App Main Script ---

// --- 1. Mock Courses Database ---
const coursesData = [
    {
        id: "web-dev-bootcamp",
        title: "The Ultimate Full-Stack Web Development Bootcamp",
        category: "Web Development",
        description: "Learn HTML5, CSS3, Javascript, Tailwind, Bootstrap, and Node.js. Build real-world portfolio projects from scratch.",
        difficulty: "Beginner",
        duration: "32h 45m",
        rating: 4.9,
        reviews: 2840,
        price: 99.99,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "Dr. Angela Chen",
            role: "Senior Software Engineer & Educator",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: Getting Started with HTML & CSS",
                lessons: [
                    { id: "wd-l1", title: "Introduction to the Web & HTML Structure", duration: "12:40" },
                    { id: "wd-l2", title: "CSS Basics, Colors, and Typography", duration: "18:15" },
                    { id: "wd-l3", title: "Styling with Bootstrap & Utility Frameworks", duration: "25:30" }
                ]
            },
            {
                sectionTitle: "Module 2: Mastering JavaScript",
                lessons: [
                    { id: "wd-l4", title: "JavaScript Variables & Data Types", duration: "15:20" },
                    { id: "wd-l5", title: "Functions & DOM Manipulation Basics", duration: "22:10" },
                    { id: "wd-l6", title: "Asynchronous JavaScript & API Fetching", duration: "30:45" }
                ]
            }
        ],
        quiz: [
            {
                question: "What does HTML stand for?",
                choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Manipulation Language", "High Tech Modern Language"],
                correctIndex: 0
            },
            {
                question: "Which Tailwind utility class is used to apply a display flex?",
                choices: ["d-flex", "display-flex", "flex", "layout-flex"],
                correctIndex: 2
            },
            {
                question: "Which of the following describes JavaScript asynchronous behavior?",
                choices: ["Code runs line-by-line blocking the next execution", "Callbacks and Promises allow tasks to run in background without blocking", "Code is processed only when the user clicks a button", "It cannot communicate with external APIs"],
                correctIndex: 1
            }
        ]
    },
    {
        id: "data-science-python",
        title: "Data Science & Machine Learning Core with Python",
        category: "Data Science",
        description: "Master Python programming, Pandas, NumPy, Scikit-Learn, and regression models. Solve real dataset problems.",
        difficulty: "Intermediate",
        duration: "24h 15m",
        rating: 4.8,
        reviews: 1420,
        price: 79.99,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "Marc Kovac",
            role: "Principal Data Scientist at AI Lab",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: Python Essentials for Data Science",
                lessons: [
                    { id: "ds-l1", title: "Python Basics: Lists, Dictionaries, and Loops", duration: "14:50" },
                    { id: "ds-l2", title: "Introduction to NumPy Arrays", duration: "19:30" }
                ]
            },
            {
                sectionTitle: "Module 2: Data Cleaning and Analysis",
                lessons: [
                    { id: "ds-l3", title: "Pandas DataFrames: Reading and Filtering Data", duration: "28:10" },
                    { id: "ds-l4", title: "Visualizing Trends with Matplotlib & Seaborn", duration: "21:40" }
                ]
            }
        ],
        quiz: [
            {
                question: "Which library is primary used for data manipulation and analysis in Python?",
                choices: ["NumPy", "Matplotlib", "Pandas", "Scikit-Learn"],
                correctIndex: 2
            },
            {
                question: "What Python keyword is used to import packages?",
                choices: ["require", "import", "include", "use"],
                correctIndex: 1
            }
        ]
    },
    {
        id: "uiux-design-mastery",
        title: "UI/UX Design Masterclass: Figma to Interactive Prototypes",
        category: "Design",
        description: "Learn wireframing, color systems, typography hierarchy, and advanced interactive animations using Figma.",
        difficulty: "Beginner",
        duration: "18h 30m",
        rating: 4.7,
        reviews: 950,
        price: 49.99,
        image: "https://images.unsplash.com/photo-1561070791-26c113006238?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "Sarah Jenkins",
            role: "Lead Product Designer & UX Consultant",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: Design Fundamentals",
                lessons: [
                    { id: "ux-l1", title: "Difference between UI and UX", duration: "10:30" },
                    { id: "ux-l2", title: "Understanding Typography and Grid Alignments", duration: "17:45" },
                    { id: "ux-l3", title: "Color Theory & Creating a Harmonious Palette", duration: "20:00" }
                ]
            },
            {
                sectionTitle: "Module 2: Figma Hands-On",
                lessons: [
                    { id: "ux-l4", title: "Figma Interfaces & Tool Basics", duration: "15:40" },
                    { id: "ux-l5", title: "Components, Auto-Layout, and Variants", duration: "26:50" }
                ]
            }
        ],
        quiz: [
            {
                question: "What is Auto-Layout in Figma mainly used for?",
                choices: ["Exporting assets automatically", "Creating responsive and dynamic components", "Sharing layouts to social media", "Running user tests"],
                correctIndex: 1
            },
            {
                question: "Which of these is a typical UX research activity?",
                choices: ["Coding a database schema", "Writing CSS code", "Conducting user interviews and personas", "Applying gradient overlays"],
                correctIndex: 2
            }
        ]
    },
    {
        id: "digital-marketing-growth",
        title: "Digital Marketing Strategist: SEO, Semrush, & Social Ads",
        category: "Marketing",
        description: "Scale organic search traffic, launch profitable Facebook/Google ads campaigns, and master content distribution.",
        difficulty: "Advanced",
        duration: "15h 10m",
        rating: 4.6,
        reviews: 780,
        price: 39.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "John Miller",
            role: "Co-Founder of GrowthHacks Marketing",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: Search Engine Optimization",
                lessons: [
                    { id: "dm-l1", title: "On-Page SEO: Keyword Research & Placements", duration: "18:20" },
                    { id: "dm-l2", title: "Technical SEO and Web Core Vitals", duration: "22:15" }
                ]
            },
            {
                sectionTitle: "Module 2: Social Media Ads Campaigns",
                lessons: [
                    { id: "dm-l3", title: "Setting up a Facebook Pixel and Custom Audiences", duration: "25:10" },
                    { id: "dm-l4", title: "A/B Testing Copy, Creatives, and Budgets", duration: "16:40" }
                ]
            }
        ],
        quiz: [
            {
                question: "What does SEO stand for?",
                choices: ["System Engine Optimization", "Search Engine Optimization", "Social Engagement Operation", "Site Search Optimization"],
                correctIndex: 1
            },
            {
                question: "What is the primary role of a Meta Pixel?",
                choices: ["It compresses images", "It generates custom visual designs", "It tracks website visits and user interactions for ad targeting", "It speeds up server load time"],
                correctIndex: 2
            }
        ]
    },
    {
        id: "js-next-level",
        title: "Modern JavaScript: Async, ES6 Modules & Patterns",
        category: "Web Development",
        description: "Deep dive into JS prototypes, closures, functional array methods, Fetch API, and structural code design patterns.",
        difficulty: "Intermediate",
        duration: "20h 00m",
        rating: 4.9,
        reviews: 1840,
        price: 59.99,
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "Dr. Angela Chen",
            role: "Senior Software Engineer & Educator",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: Deep Dive JavaScript Core",
                lessons: [
                    { id: "js-l1", title: "Understanding Closures & Scope Chain", duration: "24:10" },
                    { id: "js-l2", title: "Prototypes and Prototypal Inheritance", duration: "29:30" }
                ]
            },
            {
                sectionTitle: "Module 2: ES6 Modules & Asynchronous Flow",
                lessons: [
                    { id: "js-l3", title: "ES6 Imports, Exports, and Code Bundling", duration: "18:40" },
                    { id: "js-l4", title: "Async/Await syntax vs Promises chain", duration: "23:50" }
                ]
            }
        ],
        quiz: [
            {
                question: "Which array method creates a new array with all elements that pass a test?",
                choices: ["map()", "filter()", "forEach()", "reduce()"],
                correctIndex: 1
            },
            {
                question: "What is a Closure in JavaScript?",
                choices: ["A way to block script tags", "A function that has access to its outer scope variables even after outer function executes", "The end of a code block denoted by a curly bracket", "An event handler function"],
                correctIndex: 1
            }
        ]
    },
    {
        id: "intro-generative-ai",
        title: "Introduction to Generative AI & Prompt Engineering",
        category: "Data Science",
        description: "Understand Large Language Models (LLMs), tokenization, embeddings, and master structured prompting techniques.",
        difficulty: "Beginner",
        duration: "10h 30m",
        rating: 4.8,
        reviews: 620,
        price: 0, // Free course
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60",
        instructor: {
            name: "Marc Kovac",
            role: "Principal Data Scientist at AI Lab",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60"
        },
        curriculum: [
            {
                sectionTitle: "Module 1: AI Principles & Foundation",
                lessons: [
                    { id: "ai-l1", title: "History of AI and Neural Networks", duration: "15:40" },
                    { id: "ai-l2", title: "What is a Transformer Architecture?", duration: "28:10" }
                ]
            },
            {
                sectionTitle: "Module 2: Practical Prompt Engineering",
                lessons: [
                    { id: "ai-l3", title: "System Prompts vs User Prompts", duration: "16:20" },
                    { id: "ai-l4", title: "Few-shot Prompting and Chain of Thought", duration: "22:50" }
                ]
            }
        ],
        quiz: [
            {
                question: "What is a prompt in Generative AI?",
                choices: ["The computational hardware", "The text or instruction input given to an AI model to guide its response", "A billing reminder", "The code script compiler"],
                correctIndex: 1
            },
            {
                question: "What does Few-shot prompting mean?",
                choices: ["Training a network with billions of parameters", "Giving the AI model a few examples of input-output pairs in the prompt", "Executing the script repeatedly for short times", "Allowing only single-word responses"],
                correctIndex: 1
            }
        ]
    }
];

// --- 2. Application State ---
let state = {
    theme: "light",
    activeView: "home", // home, courses, dashboard, player
    searchQuery: "",
    selectedCategory: "All",
    selectedDifficulty: [],
    selectedSort: "rating", // rating, price-low, price-high
    enrolledCourses: {}, // courseId -> { completedLessons: [lessonIds], quizPassed: boolean }
    currentPlayerCourseId: null,
    currentPlayingLessonId: null,
    userProfile: {
        name: "Learner",
        goal: "Web Developer"
    }
};

// Initialize State from LocalStorage
function loadStateFromStorage() {
    const savedTheme = localStorage.getItem("el_theme");
    if (savedTheme) {
        state.theme = savedTheme;
    } else {
        // Default to dark theme if preferred by browser
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        state.theme = prefersDark ? "dark" : "light";
    }

    const savedEnrolled = localStorage.getItem("el_enrolled");
    if (savedEnrolled) {
        try {
            state.enrolledCourses = JSON.parse(savedEnrolled);
        } catch (e) {
            console.error("Error parsing enrollment state", e);
        }
    }

    const savedProfile = localStorage.getItem("el_profile");
    if (savedProfile) {
        try {
            state.userProfile = JSON.parse(savedProfile);
        } catch (e) {}
    }
}

function saveStateToStorage() {
    localStorage.setItem("el_theme", state.theme);
    localStorage.setItem("el_enrolled", JSON.stringify(state.enrolledCourses));
    localStorage.setItem("el_profile", JSON.stringify(state.userProfile));
}

// --- 3. View Router / Navigation ---
function navigateTo(viewName) {
    state.activeView = viewName;
    
    // Update active nav links
    document.querySelectorAll(".nav-link-custom").forEach(link => {
        if (link.getAttribute("data-view") === viewName) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Update section visibility
    document.querySelectorAll(".tab-pane").forEach(pane => {
        if (pane.id === `${viewName}-view`) {
            pane.classList.add("active-view");
        } else {
            pane.classList.remove("active-view");
        }
    });

    // Scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render logic per view
    if (viewName === "courses") {
        renderCoursesCatalog();
    } else if (viewName === "dashboard") {
        renderDashboard();
    } else if (viewName === "home") {
        renderFeaturedCourses();
    }

    // Collapse mobile menu if open (Bootstrap structure helper)
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
    }
}

// --- 4. Component Rendering ---

// Render Course Cards
function createCourseCardMarkup(course, showProgress = false) {
    const isEnrolled = !!state.enrolledCourses[course.id];
    let actionBtn = "";
    let progressMarkup = "";

    if (showProgress && isEnrolled) {
        const progress = getCourseProgressPercentage(course.id);
        const isPassed = state.enrolledCourses[course.id].quizPassed;
        progressMarkup = `
            <div class="mt-4">
                <div class="d-flex justify-content-between align-items-center mb-1 text-sm font-semibold">
                    <span>Course Progress</span>
                    <span class="text-indigo-600 dark:text-indigo-400">${progress}%</span>
                </div>
                <div class="progress" style="height: 6px; background-color: var(--border-color);">
                    <div class="progress-bar bg-indigo-600" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                ${isPassed ? `
                    <div class="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 d-flex align-items-center gap-1">
                        <i class="fa-solid fa-circle-check"></i> Quiz Passed! Certificate unlocked.
                    </div>
                ` : ""}
            </div>
        `;

        actionBtn = `
            <button class="btn w-full mt-4 py-2 text-sm font-bold text-white rounded-lg gradient-bg hover:opacity-90 shadow-md transition-all d-flex align-items-center justify-content-center gap-2" onclick="enterStudyRoom('${course.id}')">
                <i class="fa-solid fa-play"></i> Study Room
            </button>
        `;
    } else {
        const starHTML = getStarsHTML(course.rating);
        actionBtn = `
            <div class="mt-4 d-flex justify-content-between align-items-center">
                <span class="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    ${course.price === 0 ? "Free" : `$${course.price.toFixed(2)}`}
                </span>
                <button class="btn btn-outline-primary px-3 py-2 text-xs font-bold rounded-lg border-2 hover:bg-indigo-600 hover:text-white transition-all" onclick="showCourseDetails('${course.id}')">
                    Learn More
                </button>
            </div>
        `;
    }

    return `
        <div class="glass-card rounded-2xl overflow-hidden d-flex flex-column h-full">
            <div class="card-zoom relative h-48 bg-slate-100">
                <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-2.5 py-1 rounded-full text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    ${course.category}
                </span>
            </div>
            
            <div class="p-5 d-flex flex-column flex-grow">
                <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 d-flex align-items-center gap-1">
                        <i class="fa-regular fa-clock"></i> ${course.duration}
                    </span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">•</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 d-flex align-items-center gap-1">
                        <i class="fa-solid fa-layer-group"></i> ${course.difficulty}
                    </span>
                </div>
                
                <h3 class="text-base font-bold line-clamp-2 leading-tight mb-2 hover:text-indigo-600 transition-colors" onclick="showCourseDetails('${course.id}')" style="cursor:pointer;">
                    ${course.title}
                </h3>
                
                <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                    ${course.description}
                </p>
                
                <div class="mt-auto">
                    <div class="d-flex align-items-center gap-1.5 mb-2">
                        <div class="text-warning text-xs d-flex gap-0.5">${getStarsHTML(course.rating)}</div>
                        <span class="text-xs font-bold">${course.rating.toFixed(1)}</span>
                        <span class="text-xs text-slate-500 dark:text-slate-400">(${course.reviews})</span>
                    </div>

                    <div class="d-flex align-items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <img src="${course.instructor.avatar}" alt="${course.instructor.name}" class="w-7 h-7 rounded-full object-cover">
                        <div class="text-left">
                            <p class="text-xs font-semibold m-0 leading-tight">${course.instructor.name}</p>
                            <p class="text-xxs text-slate-500 dark:text-slate-400 m-0" style="font-size: 10px;">Instructor</p>
                        </div>
                    </div>
                    
                    ${progressMarkup}
                    ${actionBtn}
                </div>
            </div>
        </div>
    `;
}

function getStarsHTML(rating) {
    let stars = "";
    const floor = Math.floor(rating);
    const half = rating - floor >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= floor) {
            stars += `<i class="fa-solid fa-star"></i>`;
        } else if (i === floor + 1 && half) {
            stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return stars;
}

// Calculate progress percentage of enrolled course
function getCourseProgressPercentage(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course || !state.enrolledCourses[courseId]) return 0;
    
    // Total count of lessons
    let totalLessons = 0;
    course.curriculum.forEach(mod => {
        totalLessons += mod.lessons.length;
    });

    if (totalLessons === 0) return 0;

    const completedCount = state.enrolledCourses[courseId].completedLessons.length;
    return Math.round((completedCount / totalLessons) * 100);
}

// Render 3 Featured Courses on Home View
function renderFeaturedCourses() {
    const container = document.getElementById("featured-courses-container");
    if (!container) return;

    // Pick top 3 rated courses
    const sorted = [...coursesData].sort((a, b) => b.rating - a.rating).slice(0, 3);
    container.innerHTML = sorted.map(course => `
        <div class="col-md-4 mb-4">
            ${createCourseCardMarkup(course, false)}
        </div>
    `).join("");
}

// Render Courses Catalog (with filters applied)
function renderCoursesCatalog() {
    const container = document.getElementById("courses-catalog-container");
    if (!container) return;

    let filtered = coursesData.filter(course => {
        // Category check
        const matchCategory = state.selectedCategory === "All" || course.category === state.selectedCategory;
        
        // Search query check
        const query = state.searchQuery.toLowerCase().trim();
        const matchSearch = query === "" || 
            course.title.toLowerCase().includes(query) || 
            course.description.toLowerCase().includes(query) ||
            course.instructor.name.toLowerCase().includes(query);

        // Difficulty check
        const matchDifficulty = state.selectedDifficulty.length === 0 || 
            state.selectedDifficulty.includes(course.difficulty);

        return matchCategory && matchSearch && matchDifficulty;
    });

    // Sorting
    if (state.selectedSort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.selectedSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.selectedSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-16">
                <i class="fa-solid fa-magnifying-glass text-5xl text-slate-300 mb-4"></i>
                <h4 class="font-bold text-lg">No Courses Found</h4>
                <p class="text-slate-500 max-w-md mx-auto">We couldn't find any courses matching your filters. Try clearing some selections or searching other keywords.</p>
                <button class="btn btn-primary mt-4 rounded-xl px-4 py-2 font-semibold" onclick="clearFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(course => `
        <div class="col-md-4 mb-4">
            ${createCourseCardMarkup(course, true)}
        </div>
    `).join("");
}

// Render User Dashboard
function renderDashboard() {
    const enrolledIds = Object.keys(state.enrolledCourses);
    const statsContainer = document.getElementById("dashboard-stats-grid");
    const activeCoursesContainer = document.getElementById("active-courses-grid");
    const certificatesContainer = document.getElementById("certificates-grid");

    // Profile Settings UI Sync
    document.getElementById("profile-name-display").innerText = state.userProfile.name;
    document.getElementById("profile-goal-display").innerText = state.userProfile.goal;
    document.getElementById("input-profile-name").value = state.userProfile.name;
    document.getElementById("input-profile-goal").value = state.userProfile.goal;

    // Stat Calculations
    const countEnrolled = enrolledIds.length;
    let countCompleted = 0;
    let totalCompletedLessons = 0;

    enrolledIds.forEach(id => {
        const progress = getCourseProgressPercentage(id);
        if (progress === 100 && state.enrolledCourses[id].quizPassed) {
            countCompleted++;
        }
        totalCompletedLessons += state.enrolledCourses[id].completedLessons.length;
    });

    const mockLearningHours = (totalCompletedLessons * 0.75 + countCompleted * 1.5).toFixed(1); // Mock math for hours

    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="col-md-4 mb-3">
                <div class="glass-card p-4 rounded-2xl d-flex align-items-center gap-4">
                    <div class="p-3 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-2xl text-2xl">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4 class="text-2xl font-black m-0">${countEnrolled}</h4>
                        <p class="text-xs font-semibold text-slate-500 m-0">Enrolled Courses</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="glass-card p-4 rounded-2xl d-flex align-items-center gap-4">
                    <div class="p-3 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl text-2xl">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <div>
                        <h4 class="text-2xl font-black m-0">${countCompleted}</h4>
                        <p class="text-xs font-semibold text-slate-500 m-0">Certificates Earned</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="glass-card p-4 rounded-2xl d-flex align-items-center gap-4">
                    <div class="p-3 bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-2xl text-2xl">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div>
                        <h4 class="text-2xl font-black m-0">${mockLearningHours}h</h4>
                        <p class="text-xs font-semibold text-slate-500 m-0">Hours Spent Learning</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Active Courses
    if (activeCoursesContainer) {
        if (enrolledIds.length === 0) {
            activeCoursesContainer.innerHTML = `
                <div class="col-12 text-center py-12 glass-card rounded-2xl">
                    <i class="fa-solid fa-book-open text-4xl text-slate-300 mb-3"></i>
                    <h5 class="font-bold text-base">You haven't enrolled in any courses yet</h5>
                    <p class="text-xs text-slate-500 mb-4 max-w-sm mx-auto">Discover modern high-quality courses in web development, design, and marketing to start leveling up your skills.</p>
                    <button class="btn btn-primary rounded-xl px-4 py-2 font-semibold" onclick="navigateTo('courses')">Explore Courses</button>
                </div>
            `;
        } else {
            const listHTML = enrolledIds.map(id => {
                const course = coursesData.find(c => c.id === id);
                if (!course) return "";
                return `
                    <div class="col-md-6 mb-4">
                        ${createCourseCardMarkup(course, true)}
                    </div>
                `;
            }).join("");
            activeCoursesContainer.innerHTML = listHTML;
        }
    }

    // Certificates Grid
    if (certificatesContainer) {
        const completedCourses = enrolledIds.filter(id => {
            const progress = getCourseProgressPercentage(id);
            return progress === 100 && state.enrolledCourses[id].quizPassed;
        });

        if (completedCourses.length === 0) {
            certificatesContainer.innerHTML = `
                <div class="col-12 text-center py-12 glass-card rounded-2xl">
                    <i class="fa-solid fa-ribbon text-4xl text-slate-300 mb-3"></i>
                    <h5 class="font-bold text-base">No certificates unlocked yet</h5>
                    <p class="text-xs text-slate-500 max-w-xs mx-auto">Complete 100% of the lessons in a course and pass the graduation quiz to claim your verifiable certificate.</p>
                </div>
            `;
        } else {
            certificatesContainer.innerHTML = completedCourses.map(id => {
                const course = coursesData.find(c => c.id === id);
                return `
                    <div class="col-md-4 mb-4">
                        <div class="glass-card p-4 rounded-2xl border-emerald-500/20 text-center relative overflow-hidden h-full d-flex flex-column justify-content-between">
                            <div class="absolute top-0 right-0 p-2 bg-emerald-500 text-white text-xs font-bold rounded-bl-xl">
                                <i class="fa-solid fa-shield-halved"></i> Active
                            </div>
                            <div class="pt-4">
                                <i class="fa-solid fa-certificate text-4xl text-warning mb-2 animate-bounce"></i>
                                <h5 class="text-sm font-bold leading-snug line-clamp-2">${course.title}</h5>
                                <p class="text-xxs text-slate-500 dark:text-slate-400 mt-1">Verified on: ${new Date().toLocaleDateString()}</p>
                            </div>
                            <button class="btn btn-outline-success btn-sm w-full mt-4 rounded-xl py-1.5 font-bold text-xs" onclick="openCertificateModal('${course.id}')">
                                <i class="fa-solid fa-eye"></i> View Certificate
                            </button>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }
}

// --- 5. Course Details Modal (Bootstrap Integration) ---
function showCourseDetails(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const modalTitle = document.getElementById("courseModalLabel");
    const modalBody = document.getElementById("courseModalBody");
    const enrollBtn = document.getElementById("courseModalEnrollBtn");

    modalTitle.innerHTML = `<span class="gradient-text">${course.category}</span> Course Details`;

    const isEnrolled = !!state.enrolledCourses[courseId];
    
    // Set enroll action button
    if (isEnrolled) {
        enrollBtn.innerHTML = `<i class="fa-solid fa-play"></i> Go to Study Room`;
        enrollBtn.className = "btn text-white font-bold gradient-bg border-0 rounded-xl px-4 py-2 hover:opacity-90 shadow-md";
        enrollBtn.onclick = () => {
            const bsModal = bootstrap.Modal.getInstance(document.getElementById("courseDetailsModal"));
            if (bsModal) bsModal.hide();
            enterStudyRoom(courseId);
        };
    } else {
        enrollBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Enroll for ${course.price === 0 ? "Free" : `$${course.price.toFixed(2)}`}`;
        enrollBtn.className = "btn btn-primary font-bold rounded-xl px-4 py-2";
        enrollBtn.onclick = () => enrollCourse(courseId);
    }

    // Build Curriculum HTML
    let curriculumAccordion = `
        <div class="accordion accordion-flush" id="curriculumAccordion">
    `;
    course.curriculum.forEach((mod, index) => {
        curriculumAccordion += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                        ${mod.sectionTitle}
                    </button>
                </h2>
                <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#curriculumAccordion">
                    <div class="accordion-body p-0">
                        <ul class="list-group list-group-flush text-left m-0">
                            ${mod.lessons.map(lesson => `
                                <li class="list-group-item bg-transparent text-sm py-2.5 d-flex justify-content-between align-items-center border-slate-100 dark:border-slate-800">
                                    <span class="d-flex align-items-center gap-2">
                                        <i class="fa-regular fa-circle-play text-indigo-600 dark:text-indigo-400"></i>
                                        ${lesson.title}
                                    </span>
                                    <span class="text-xs text-slate-500">${lesson.duration}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    curriculumAccordion += `</div>`;

    modalBody.innerHTML = `
        <div class="row align-items-start g-4">
            <div class="col-md-5">
                <img src="${course.image}" alt="${course.title}" class="w-full rounded-2xl object-cover shadow-sm mb-3">
                <div class="d-flex justify-content-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span><i class="fa-regular fa-clock"></i> Duration: ${course.duration}</span>
                    <span><i class="fa-solid fa-signal"></i> Level: ${course.difficulty}</span>
                </div>
                <div class="glass-card p-3 rounded-xl d-flex align-items-center gap-3">
                    <img src="${course.instructor.avatar}" alt="${course.instructor.name}" class="w-12 h-12 rounded-full object-cover">
                    <div>
                        <h6 class="font-bold text-xs m-0 mb-0.5">${course.instructor.name}</h6>
                        <p class="text-xxs text-slate-500 dark:text-slate-400 m-0">${course.instructor.role}</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-7">
                <h4 class="text-lg font-black leading-snug mb-2 text-left">${course.title}</h4>
                <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="text-warning text-xs d-flex gap-0.5">${getStarsHTML(course.rating)}</div>
                    <span class="text-xs font-bold">${course.rating.toFixed(1)}</span>
                    <span class="text-xs text-slate-500">(${course.reviews} student reviews)</span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-left mb-4">
                    ${course.description}
                </p>
                <h5 class="text-sm font-bold text-left mb-2.5">Course Curriculum</h5>
                ${curriculumAccordion}
            </div>
        </div>
    `;

    // Show modal using Bootstrap JS API
    const element = document.getElementById("courseDetailsModal");
    const bsModal = new bootstrap.Modal(element);
    bsModal.show();
}

// Enroll Course Logic
function enrollCourse(courseId) {
    if (!state.enrolledCourses[courseId]) {
        state.enrolledCourses[courseId] = {
            completedLessons: [],
            quizPassed: false
        };
        saveStateToStorage();
        showNotification("Success!", "You have successfully enrolled in this course.", "success");
    }

    // Hide Modal
    const modalElement = document.getElementById("courseDetailsModal");
    const bsModal = bootstrap.Modal.getInstance(modalElement);
    if (bsModal) bsModal.hide();

    // Take user to Study Room
    setTimeout(() => {
        enterStudyRoom(courseId);
    }, 400);
}

// --- 6. Study Room / Interactive Player Logic ---
function enterStudyRoom(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    state.currentPlayerCourseId = courseId;
    
    // Choose first lesson by default or first incomplete
    let defaultLesson = course.curriculum[0].lessons[0];
    const enrolledData = state.enrolledCourses[courseId];
    if (enrolledData) {
        // Find first incomplete lesson
        let found = false;
        for (const mod of course.curriculum) {
            for (const les of mod.lessons) {
                if (!enrolledData.completedLessons.includes(les.id)) {
                    defaultLesson = les;
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }

    state.currentPlayingLessonId = defaultLesson ? defaultLesson.id : course.curriculum[0].lessons[0].id;
    
    navigateTo("player");
    renderPlayer();
}

function renderPlayer() {
    const courseId = state.currentPlayerCourseId;
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const enrolledData = state.enrolledCourses[courseId];
    if (!enrolledData) {
        navigateTo("courses");
        return;
    }

    // Main Headers
    document.getElementById("player-course-category").innerText = course.category;
    document.getElementById("player-course-title").innerText = course.title;

    // Get Active Lesson Details
    let activeLesson = null;
    for (const mod of course.curriculum) {
        const found = mod.lessons.find(l => l.id === state.currentPlayingLessonId);
        if (found) {
            activeLesson = found;
            break;
        }
    }
    if (!activeLesson) activeLesson = course.curriculum[0].lessons[0];

    // Update Player View Details
    document.getElementById("player-video-lesson-title").innerText = activeLesson.title;
    
    // Mock Video Interface (with background illustration)
    const videoPlaceholder = document.getElementById("player-video-placeholder");
    videoPlaceholder.innerHTML = `
        <div class="w-full h-full relative d-flex flex-column align-items-center justify-content-center text-white" style="background: linear-gradient(180deg, #1e1b4b 0%, #030712 100%);">
            <!-- Simulated Video Banner -->
            <div class="absolute inset-0 opacity-20 bg-cover bg-center" style="background-image: url('${course.image}'); filter: blur(4px);"></div>
            
            <div class="z-10 text-center px-4">
                <div class="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/20 d-flex align-items-center justify-content-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform pulse-active" onclick="playMockVideo()">
                    <i class="fa-solid fa-play text-3xl text-indigo-400"></i>
                </div>
                <h4 class="text-base font-bold mb-1">${activeLesson.title}</h4>
                <p class="text-xs text-indigo-200">Video Simulation • Press play to run progress walkthrough demo</p>
            </div>
            
            <!-- Controls Bar -->
            <div class="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur p-3 d-flex justify-content-between align-items-center text-xs z-10">
                <div class="d-flex align-items-center gap-3">
                    <button class="hover:text-indigo-400" onclick="playMockVideo()"><i class="fa-solid fa-play"></i></button>
                    <button class="hover:text-indigo-400"><i class="fa-solid fa-volume-high"></i></button>
                    <span>0:00 / ${activeLesson.duration}</span>
                </div>
                <div class="flex-grow mx-4">
                    <div class="progress" style="height: 4px; background-color: rgba(255,255,255,0.15);">
                        <div class="progress-bar bg-indigo-500" style="width: 0%" id="video-progress-bar"></div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <button class="hover:text-indigo-400"><i class="fa-solid fa-gear"></i></button>
                    <button class="hover:text-indigo-400"><i class="fa-solid fa-expand"></i></button>
                </div>
            </div>
        </div>
    `;

    // Render Curriculum Playlist
    const playlistContainer = document.getElementById("player-playlist-container");
    let playlistHTML = "";
    
    course.curriculum.forEach((mod, modIdx) => {
        playlistHTML += `
            <div class="mb-4">
                <h6 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2 px-1">${mod.sectionTitle}</h6>
                <div class="d-flex flex-column gap-1.5">
        `;
        
        mod.lessons.forEach(lesson => {
            const isCompleted = enrolledData.completedLessons.includes(lesson.id);
            const isActive = lesson.id === state.currentPlayingLessonId;
            
            playlistHTML += `
                <div class="lesson-item d-flex align-items-center justify-content-between p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 ${isCompleted ? 'completed' : ''} ${isActive ? 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-500/30' : ''}" style="cursor: pointer;" onclick="selectLesson('${lesson.id}')">
                    <div class="d-flex align-items-center gap-2.5 max-w-[80%]">
                        <input type="checkbox" class="form-check-input flex-shrink-0 cursor-pointer accent-indigo-600" ${isCompleted ? 'checked' : ''} onclick="toggleLessonComplete(event, '${lesson.id}')">
                        <span class="text-xs font-semibold text-left line-clamp-1 ${isActive ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}">
                            ${lesson.title}
                        </span>
                    </div>
                    <span class="text-xxs font-bold text-slate-400">${lesson.duration}</span>
                </div>
            `;
        });

        playlistHTML += `
                </div>
            </div>
        `;
    });

    playlistContainer.innerHTML = playlistHTML;

    // Render Quiz Tab Card / CTA
    renderQuizCTA();
}

function playMockVideo() {
    const bar = document.getElementById("video-progress-bar");
    if (!bar) return;

    let width = 0;
    showNotification("Demo Mode", "Simulating lecture play...", "info");
    
    const interval = setInterval(() => {
        width += 10;
        bar.style.width = width + "%";
        if (width >= 100) {
            clearInterval(interval);
            showNotification("Completed!", "You've finished this lecture video. Lesson marked complete.", "success");
            // Automatically mark complete
            if (state.currentPlayerCourseId && state.currentPlayingLessonId) {
                const isCompleted = state.enrolledCourses[state.currentPlayerCourseId].completedLessons.includes(state.currentPlayingLessonId);
                if (!isCompleted) {
                    state.enrolledCourses[state.currentPlayerCourseId].completedLessons.push(state.currentPlayingLessonId);
                    saveStateToStorage();
                    renderPlayer();
                }
            }
        }
    }, 200);
}

function selectLesson(lessonId) {
    state.currentPlayingLessonId = lessonId;
    renderPlayer();
}

function toggleLessonComplete(event, lessonId) {
    // Stop event bubbling to prevent double selecting the lesson
    event.stopPropagation();
    
    const courseId = state.currentPlayerCourseId;
    const completedList = state.enrolledCourses[courseId].completedLessons;
    
    if (event.target.checked) {
        if (!completedList.includes(lessonId)) {
            completedList.push(lessonId);
        }
    } else {
        const index = completedList.indexOf(lessonId);
        if (index > -1) {
            completedList.splice(index, 1);
        }
    }
    
    saveStateToStorage();
    renderPlayer();
}

function renderQuizCTA() {
    const courseId = state.currentPlayerCourseId;
    const course = coursesData.find(c => c.id === courseId);
    const progress = getCourseProgressPercentage(courseId);
    const enrolled = state.enrolledCourses[courseId];
    
    const container = document.getElementById("player-quiz-cta-container");
    if (!container) return;

    if (enrolled.quizPassed) {
        container.innerHTML = `
            <div class="glass-card p-4 rounded-2xl border-emerald-500/20 text-center">
                <i class="fa-solid fa-circle-check text-3xl text-emerald-500 mb-2"></i>
                <h5 class="text-sm font-bold">Graduation Quiz Passed!</h5>
                <p class="text-xs text-slate-500 mb-3">Congratulations, you scored 100% and unlocked your course certificate.</p>
                <button class="btn btn-outline-success btn-sm rounded-xl px-3 py-1.5 font-bold" onclick="openCertificateModal('${courseId}')">
                    <i class="fa-solid fa-award"></i> View Certificate
                </button>
            </div>
        `;
    } else if (progress === 100) {
        container.innerHTML = `
            <div class="glass-card p-4 rounded-2xl border-indigo-500/20 text-center">
                <i class="fa-solid fa-award text-3xl text-indigo-600 dark:text-indigo-400 mb-2 animate-bounce"></i>
                <h5 class="text-sm font-bold">Quiz Unlocked!</h5>
                <p class="text-xs text-slate-500 mb-3">You completed all lessons. Pass this multiple-choice exam to earn your certificate.</p>
                <button class="btn btn-primary btn-sm rounded-xl px-4 py-1.5 font-bold" onclick="startQuizFlow('${courseId}')">
                    <i class="fa-solid fa-pen-to-square"></i> Start Quiz
                </button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="glass-card p-4 rounded-2xl border-slate-200/50 dark:border-slate-800/50 text-center">
                <i class="fa-solid fa-lock text-2xl text-slate-400 mb-2"></i>
                <h5 class="text-sm font-bold text-slate-400">Quiz Locked</h5>
                <p class="text-xs text-slate-500">Please complete all curriculum lessons (${progress}%) to unlock the graduation certificate exam.</p>
            </div>
        `;
    }
}

// --- 7. Quiz Engine (Bootstrap Modal Quiz Implementation) ---
let quizState = {
    courseId: null,
    currentQuestionIndex: 0,
    answers: [],
    modal: null
};

function startQuizFlow(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course || !course.quiz) return;

    quizState.courseId = courseId;
    quizState.currentQuestionIndex = 0;
    quizState.answers = [];

    renderQuizQuestion();

    // Show quiz modal
    const element = document.getElementById("quizModal");
    quizState.modal = new bootstrap.Modal(element);
    quizState.modal.show();
}

function renderQuizQuestion() {
    const course = coursesData.find(c => c.id === quizState.courseId);
    const questionData = course.quiz[quizState.currentQuestionIndex];
    
    document.getElementById("quizModalLabel").innerText = `Question ${quizState.currentQuestionIndex + 1} of ${course.quiz.length}`;
    
    const body = document.getElementById("quizModalBody");
    body.innerHTML = `
        <h5 class="text-base font-bold text-left mb-3.5 leading-snug">${questionData.question}</h5>
        <div class="d-flex flex-column gap-2 text-left">
            ${questionData.choices.map((choice, index) => `
                <button class="btn btn-outline-secondary text-left text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50/10 dark:hover:bg-indigo-950/20 hover:text-indigo-600 transition-all d-flex align-items-center justify-content-between" onclick="submitAnswer(${index})">
                    <span>${choice}</span>
                    <i class="fa-regular fa-circle text-slate-300"></i>
                </button>
            `).join("")}
        </div>
    `;
}

function submitAnswer(selectedIndex) {
    const course = coursesData.find(c => c.id === quizState.courseId);
    const questionData = course.quiz[quizState.currentQuestionIndex];
    const isCorrect = selectedIndex === questionData.correctIndex;
    
    quizState.answers.push({
        selectedIndex: selectedIndex,
        isCorrect: isCorrect
    });

    // Animate Choice Selection and Provide Immediate Feedback
    const buttons = document.querySelectorAll("#quizModalBody button");
    buttons.forEach((btn, idx) => {
        // Disable choices
        btn.disabled = true;
        if (idx === questionData.correctIndex) {
            btn.className = "btn btn-success text-left text-xs font-semibold py-3 px-4 rounded-xl border-2 border-emerald-500 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400 d-flex align-items-center justify-content-between";
            btn.querySelector("i").className = "fa-solid fa-circle-check text-emerald-500";
        } else if (idx === selectedIndex && !isCorrect) {
            btn.className = "btn btn-danger text-left text-xs font-semibold py-3 px-4 rounded-xl border-2 border-rose-500 text-rose-700 bg-rose-50 dark:bg-rose-950/20 dark:text-rose-400 d-flex align-items-center justify-content-between";
            btn.querySelector("i").className = "fa-solid fa-circle-xmark text-rose-500";
        } else {
            btn.className = "btn text-left text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 bg-transparent d-flex align-items-center justify-content-between";
        }
    });

    // Move to next question after timeout delay
    setTimeout(() => {
        quizState.currentQuestionIndex++;
        if (quizState.currentQuestionIndex < course.quiz.length) {
            renderQuizQuestion();
        } else {
            finishQuiz();
        }
    }, 1400);
}

function finishQuiz() {
    const course = coursesData.find(c => c.id === quizState.courseId);
    const totalQuestions = course.quiz.length;
    const correctCount = quizState.answers.filter(a => a.isCorrect).length;
    const allCorrect = correctCount === totalQuestions;

    const body = document.getElementById("quizModalBody");
    const footer = document.getElementById("quizModalFooter");

    if (allCorrect) {
        // Mark quiz passed
        state.enrolledCourses[quizState.courseId].quizPassed = true;
        saveStateToStorage();

        body.innerHTML = `
            <div class="text-center py-4">
                <i class="fa-solid fa-trophy text-5xl text-warning mb-3 animate-bounce"></i>
                <h4 class="font-extrabold text-lg text-emerald-600 dark:text-emerald-400 mb-1">Perfect Score! 100% Passed</h4>
                <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">You got all ${correctCount} questions correct. Your graduate verification certificate has been generated and added to your dashboard.</p>
                <button class="btn btn-success rounded-xl px-5 py-2.5 text-xs font-bold shadow-md" onclick="claimQuizCertificate()">
                    <i class="fa-solid fa-award"></i> Claim Certificate
                </button>
            </div>
        `;
    } else {
        body.innerHTML = `
            <div class="text-center py-4">
                <i class="fa-solid fa-triangle-exclamation text-5xl text-warning mb-3"></i>
                <h4 class="font-extrabold text-lg mb-1">Score: ${correctCount}/${totalQuestions} Correct</h4>
                <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">You need to answer all questions correctly to claim your certificate. Review the curriculum lectures and try again.</p>
                <button class="btn btn-primary rounded-xl px-5 py-2.5 text-xs font-bold" onclick="restartQuiz()">
                    <i class="fa-solid fa-arrows-rotate"></i> Try Again
                </button>
            </div>
        `;
    }
}

function restartQuiz() {
    quizState.currentQuestionIndex = 0;
    quizState.answers = [];
    renderQuizQuestion();
}

function claimQuizCertificate() {
    if (quizState.modal) {
        quizState.modal.hide();
    }
    // Take user to dashboard to see certificate
    navigateTo("dashboard");
    setTimeout(() => {
        openCertificateModal(quizState.courseId);
    }, 450);
}

// --- 8. Certificate Modal ---
function openCertificateModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const printArea = document.getElementById("certificate-print-area");
    
    // Format current date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString(undefined, dateOptions);

    printArea.innerHTML = `
        <div class="certificate-preview p-5 md:p-8 rounded-xl text-center d-flex flex-column justify-content-between h-auto shadow-md">
            <div>
                <p class="gradient-text font-bold text-sm tracking-widest uppercase mb-1">Certificate of Completion</p>
                <p class="text-xxs text-slate-500 m-0">This credential certifies that</p>
            </div>
            
            <div class="my-5">
                <h2 class="text-2xl font-black text-slate-800 dark:text-slate-100 border-b border-indigo-500/20 pb-2 max-w-xs mx-auto">${state.userProfile.name}</h2>
                <p class="text-xs text-slate-500 mt-2">has successfully completed the instructional syllabus and academic checkpoints for</p>
                <h4 class="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 max-w-md mx-auto leading-snug my-3">${course.title}</h4>
                <p class="text-xxs text-slate-400">An intensive curriculum spanning <b>${course.duration}</b> of lectures, coding labs, and evaluation checkpoints.</p>
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-3 border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                <div class="text-left">
                    <p class="text-xxs text-slate-400 m-0" style="font-size: 8px;">Date Issued</p>
                    <p class="text-xs font-bold m-0">${dateStr}</p>
                </div>
                <div>
                    <div class="gold-seal mx-auto scale-90"></div>
                </div>
                <div class="text-right">
                    <p class="text-xxs text-slate-400 m-0" style="font-size: 8px;">Authorized Instructor Signature</p>
                    <p class="font-signature font-bold text-xs italic text-indigo-600 dark:text-indigo-400 m-0" style="font-family: 'Georgia', serif;">${course.instructor.name}</p>
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById("certificateModal"));
    modal.show();
}

function printCertificate() {
    window.print();
}

// --- 9. Filter Action Handlers ---
function setCategory(categoryName) {
    state.selectedCategory = categoryName;
    
    // Update active UI pills
    document.querySelectorAll(".category-pill").forEach(btn => {
        if (btn.getAttribute("data-cat") === categoryName) {
            btn.className = "category-pill btn text-white rounded-full text-xs font-bold px-4 py-2 gradient-bg shadow-sm border-0";
        } else {
            btn.className = "category-pill btn text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-xs font-bold px-4 py-2 border-0";
        }
    });

    renderCoursesCatalog();
}

function handleSearch(event) {
    state.searchQuery = event.target.value;
    renderCoursesCatalog();
}

function toggleDifficulty(diffName) {
    const index = state.selectedDifficulty.indexOf(diffName);
    if (index > -1) {
        state.selectedDifficulty.splice(index, 1);
    } else {
        state.selectedDifficulty.push(diffName);
    }
    renderCoursesCatalog();
}

function handleSortChange(event) {
    state.selectedSort = event.target.value;
    renderCoursesCatalog();
}

function clearFilters() {
    state.searchQuery = "";
    state.selectedCategory = "All";
    state.selectedDifficulty = [];
    state.selectedSort = "rating";

    // Reset UI fields
    const searchInput = document.getElementById("catalog-search");
    if (searchInput) searchInput.value = "";
    
    const sortSelect = document.getElementById("catalog-sort");
    if (sortSelect) sortSelect.value = "rating";

    document.querySelectorAll(".difficulty-checkbox").forEach(chk => {
        chk.checked = false;
    });

    setCategory("All");
}

// --- 10. Profile Save ---
function saveProfile(event) {
    event.preventDefault();
    const nameVal = document.getElementById("input-profile-name").value.trim();
    const goalVal = document.getElementById("input-profile-goal").value.trim();

    if (nameVal) {
        state.userProfile.name = nameVal;
    }
    if (goalVal) {
        state.userProfile.goal = goalVal;
    }

    saveStateToStorage();
    renderDashboard();

    // Trigger feedback notification
    showNotification("Profile Updated", "Your learning profile changes have been saved.", "success");
}

// --- 11. Custom Notification Toast ---
function showNotification(title, message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    let icon = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';
    if (type === "warning" || type === "info") {
        icon = '<i class="fa-solid fa-circle-info text-indigo-500"></i>';
    } else if (type === "error") {
        icon = '<i class="fa-solid fa-circle-exclamation text-rose-500"></i>';
    }

    const toast = document.createElement("div");
    toast.className = "glass-panel p-3.5 rounded-2xl shadow-xl d-flex align-items-center gap-3 border border-indigo-500/20";
    toast.style.cssText = `
        min-width: 280px; 
        max-width: 380px; 
        opacity: 0; 
        transform: translateY(20px); 
        transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;

    toast.innerHTML = `
        <div class="text-xl">${icon}</div>
        <div class="text-left">
            <h6 class="text-xs font-black m-0 mb-0.5">${title}</h6>
            <p class="text-xxs text-slate-500 dark:text-slate-400 m-0" style="font-size: 10px;">${message}</p>
        </div>
    `;

    container.appendChild(toast);
    
    // Trigger entrance animation
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 50);

    // Remove toast after delay
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-15px)";
        setTimeout(() => {
            toast.remove();
        }, 350);
    }, 3500);
}

// --- 12. Theme Switcher ---
function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    
    if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    
    const icon = document.getElementById("theme-icon");
    if (icon) {
        icon.className = state.theme === "light" ? "fa-solid fa-moon text-slate-700" : "fa-solid fa-sun text-amber-400";
    }

    saveStateToStorage();
}

function initThemeUI() {
    document.documentElement.setAttribute("data-theme", state.theme);
    
    if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    
    const icon = document.getElementById("theme-icon");
    if (icon) {
        icon.className = state.theme === "light" ? "fa-solid fa-moon text-slate-700" : "fa-solid fa-sun text-amber-400";
    }
}

// --- 13. Application Launch Setup ---
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromStorage();
    initThemeUI();
    
    // Initial Render
    renderFeaturedCourses();

    // Hook up dynamic search handler if exists (Home Search Bar shortcut)
    const homeSearch = document.getElementById("home-hero-search");
    if (homeSearch) {
        homeSearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const val = homeSearch.value;
                state.searchQuery = val;
                
                // Clear catalog input & sync
                const catalogInput = document.getElementById("catalog-search");
                if (catalogInput) catalogInput.value = val;

                navigateTo("courses");
            }
        });
    }
});
