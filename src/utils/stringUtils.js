// HELPER FUNCTION FOR CREATING ACTIVITY SLUG - IMPORTED IN:
// 1) AppRouter.jsx
// 2) Header.jsx
// 3) ActivityList.jsx

export const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};
