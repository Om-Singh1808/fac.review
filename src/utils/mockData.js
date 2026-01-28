export const mockProfessors = [
    {
        id: 1,
        name: 'Dr. Anjali Sharma',
        department: 'Computer Science',
        college: 'Delhi Technological University',
        overallRating: 4.8,
        difficulty: 3.2,
        totalReviews: 124,
        ratingDistribution: { 5: 90, 4: 25, 3: 5, 2: 2, 1: 2 },
        tags: ['Inspirational', 'Respected', 'Clear Grading', 'Group Projects'],
        about: 'Dr. Sharma specializes in Artificial Intelligence and Machine Learning. She is known for her interactive lectures and support for student research projects.'
    },
    {
        id: 2,
        name: 'Prof. Rajesh Kumar',
        department: 'Physics',
        college: 'IIT Delhi',
        overallRating: 3.5,
        difficulty: 4.5,
        totalReviews: 89,
        ratingDistribution: { 5: 15, 4: 25, 3: 30, 2: 10, 1: 9 },
        tags: ['Tough Grader', 'Lecture Heavy', 'Knowledgeable', 'Strict Attendance'],
        about: 'Prof. Kumar is a senior faculty member in the Physics department. His classes are rigorously mathematical and he emphasizes theoretical understanding.'
    },
    {
        id: 3,
        name: 'Dr. Priya Singh',
        department: 'Economics',
        college: 'St. Stephen\'s College',
        overallRating: 4.2,
        difficulty: 2.8,
        totalReviews: 56,
        ratingDistribution: { 5: 30, 4: 15, 3: 8, 2: 1, 1: 2 },
        tags: ['Engaging', 'Hilarious', 'Easy A', 'Accessible Outside Class'],
        about: 'Dr. Singh brings economics to life with real-world examples. She is very approachable and often helps students with career guidance.'
    },
    {
        id: 4,
        name: 'Prof. Vikram Malhotra',
        department: 'Mathematics',
        college: 'BITS Pilani',
        overallRating: 2.2,
        difficulty: 4.9,
        totalReviews: 210,
        ratingDistribution: { 5: 10, 4: 20, 3: 40, 2: 60, 1: 80 },
        tags: ['Get Ready to Read', 'Lots of Homework', 'Unclear Criteria', 'Skipped Class'],
        about: 'Prof. Malhotra takes currently Linear Algebra and Calculus. Students often find his exams challenging and his grading standards very high.'
    }
];

export const mockReviews = [
    {
        id: 101,
        professorId: 1,
        courseCode: 'CS101',
        rating: 5.0,
        difficulty: 3.0,
        attendance: 'Mandatory',
        gradeReceived: 'A',
        date: 'Jan 15, 2026',
        likes: 24,
        dislikes: 1,
        comment: 'Dr. Sharma is hands down the best professor I have had. She actually cares if you understand the material. Her analogies make complex ML concepts super easy to grasp.',
        tags: ['Inspirational', 'Clear Grading'],
        parameters: {
            'Way of Teaching': 5,
            'Social Nature': 5,
            'Response & Attention': 5,
            'Attitude & Behaviour': 5,
            'Practical Relevance': 5
        }
    },
    {
        id: 102,
        professorId: 1,
        courseCode: 'CS405',
        rating: 4.0,
        difficulty: 4.0,
        attendance: 'Not Mandatory',
        gradeReceived: 'B+',
        date: 'Dec 10, 2025',
        likes: 12,
        dislikes: 0,
        comment: 'Great class but lots of work. The project was tough but I learned a lot. She is very helpful during office hours.',
        tags: ['Group Projects', 'Heavy Homework'],
        parameters: {
            'Way of Teaching': 4,
            'Social Nature': 5,
            'Response & Attention': 4,
            'Attitude & Behaviour': 5,
            'Practical Relevance': 5
        }
    },
    {
        id: 201,
        professorId: 2,
        courseCode: 'PHY201',
        rating: 2.0,
        difficulty: 5.0,
        attendance: 'Mandatory',
        gradeReceived: 'C',
        date: 'Nov 05, 2025',
        likes: 45,
        dislikes: 2,
        comment: 'He knows his stuff but he cannot teach to save his life. He assumes everyone is a genius. If you ask a "stupid" question, he will roast you.',
        tags: ['Tough Grader', 'Lecture Heavy'],
        parameters: {
            'Way of Teaching': 2,
            'Social Nature': 1,
            'Response & Attention': 2,
            'Attitude & Behaviour': 1,
            'Practical Relevance': 3
        }
    },
    {
        id: 301,
        professorId: 3,
        courseCode: 'ECO101',
        rating: 5.0,
        difficulty: 2.0,
        attendance: 'Not Mandatory',
        gradeReceived: 'A',
        date: 'Oct 20, 2026',
        likes: 10,
        dislikes: 0,
        comment: 'Loved her class! Very chill and she uses memes in her slides. Assignments are easy if you listen.',
        tags: ['Hilarious', 'Easy A'],
        parameters: {
            'Way of Teaching': 5,
            'Social Nature': 5,
            'Response & Attention': 4,
            'Attitude & Behaviour': 5,
            'Practical Relevance': 4
        }
    }
];
