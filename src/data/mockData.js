// Mock users data
export const users = [
  {
    id: 1,
    username: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?u=john_doe',
    bio: 'Software developer and tech enthusiast. Love coding and coffee ☕',
    followers: 245,
    following: 123,
    joinedDate: '2023-01-15'
  },
  {
    id: 2,
    username: 'jane_smith',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?u=jane_smith',
    bio: 'Designer | Creative thinker | Making the world beautiful one pixel at a time 🎨',
    followers: 532,
    following: 201,
    joinedDate: '2022-11-20'
  },
  {
    id: 3,
    username: 'alex_wilson',
    name: 'Alex Wilson',
    email: 'alex@example.com',
    avatar: 'https://i.pravatar.cc/150?u=alex_wilson',
    bio: 'Adventure seeker 🏔️ | Photographer | Living life one trip at a time',
    followers: 890,
    following: 432,
    joinedDate: '2022-08-05'
  },
  {
    id: 4,
    username: 'sarah_johnson',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://i.pravatar.cc/150?u=sarah_johnson',
    bio: 'Foodie | Recipe creator | Sharing delicious moments 🍕',
    followers: 1203,
    following: 567,
    joinedDate: '2022-05-10'
  }
];

// Mock posts data
export const posts = [
  {
    id: 1,
    userId: 1,
    content: 'Just finished building my first React app with Material UI! The experience has been amazing. Loving the component library and the ease of creating beautiful UIs. #ReactJS #MaterialUI #WebDev',
    image: null,
    likes: 42,
    likedBy: [2, 3, 4],
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    userId: 2,
    content: 'New design project completed! Check out this beautiful dashboard I created for a client. Minimalist and functional design is the way to go! 🎨',
    image: 'https://picsum.photos/seed/design1/600/400',
    likes: 89,
    likedBy: [1, 3, 4],
    createdAt: '2024-01-14T15:45:00Z'
  },
  {
    id: 3,
    userId: 3,
    content: 'Weekend hiking trip was absolutely breathtaking! The views from the summit were incredible. Nature never fails to amaze me. 🏔️ #Hiking #Adventure #Nature',
    image: 'https://picsum.photos/seed/nature1/600/400',
    likes: 156,
    likedBy: [1, 2, 4],
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: 4,
    userId: 4,
    content: 'Made the most amazing homemade pasta today! Fresh ingredients make all the difference. Recipe coming soon to my blog! 🍝',
    image: 'https://picsum.photos/seed/food1/600/400',
    likes: 203,
    likedBy: [1, 2, 3],
    createdAt: '2024-01-12T18:20:00Z'
  },
  {
    id: 5,
    userId: 1,
    content: 'Exciting news! Just got accepted to speak at the upcoming tech conference. Can\'t wait to share my knowledge about React best practices! 🎉',
    image: null,
    likes: 78,
    likedBy: [2, 3],
    createdAt: '2024-01-11T14:00:00Z'
  }
];

// Mock comments data
export const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    content: 'Congrats! Material UI is such a great choice for building modern UIs.',
    createdAt: '2024-01-15T11:00:00Z'
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    content: 'Would love to see what you built! Share a link?',
    createdAt: '2024-01-15T12:30:00Z'
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    content: 'This looks amazing! Love the color scheme.',
    createdAt: '2024-01-14T16:15:00Z'
  },
  {
    id: 4,
    postId: 3,
    userId: 4,
    content: 'Wow, those views are stunning! Where is this?',
    createdAt: '2024-01-13T10:00:00Z'
  },
  {
    id: 5,
    postId: 3,
    userId: 2,
    content: 'I need to go hiking more often. This is inspiring!',
    createdAt: '2024-01-13T11:30:00Z'
  },
  {
    id: 6,
    postId: 4,
    userId: 1,
    content: 'That looks delicious! Can\'t wait for the recipe.',
    createdAt: '2024-01-12T19:00:00Z'
  },
  {
    id: 7,
    postId: 4,
    userId: 3,
    content: 'My stomach is growling just looking at this! 😋',
    createdAt: '2024-01-12T20:15:00Z'
  },
  {
    id: 8,
    postId: 5,
    userId: 4,
    content: 'Congratulations! You\'ll do great!',
    createdAt: '2024-01-11T15:00:00Z'
  }
];

// Get user by ID
export const getUserById = (id) => users.find(user => user.id === id);

// Get posts by user ID
export const getPostsByUserId = (userId) => posts.filter(post => post.userId === userId);

// Get comments by post ID
export const getCommentsByPostId = (postId) => comments.filter(comment => comment.postId === postId);

// Current logged in user (for demo purposes)
export const currentUser = users[0];
