// DIGITAL WELLNESS PLAN - STORAGE
const Storage = {
    KEYS: {
        GOALS: 'dwp_goals',
        FAVOURITES: 'dwp_favourites',
        SETTINGS: 'dwp_settings'
    },
    
    getGoals() {
        const data = localStorage.getItem(this.KEYS.GOALS);
        return data ? JSON.parse(data) : [];
    },
    
    setGoals(goals) {
        localStorage.setItem(this.KEYS.GOALS, JSON.stringify(goals));
    },
    
    addGoal(cardId) {
        const goals = this.getGoals();
        if (goals.length >= 3) return false;
        if (goals.includes(cardId)) return false;
        goals.push(cardId);
        this.setGoals(goals);
        return true;
    },
    
    removeGoal(cardId) {
        const goals = this.getGoals().filter(id => id !== cardId);
        this.setGoals(goals);
    },
    
    getFavourites() {
        const data = localStorage.getItem(this.KEYS.FAVOURITES);
        return data ? JSON.parse(data) : [];
    },
    
    setFavourites(favourites) {
        localStorage.setItem(this.KEYS.FAVOURITES, JSON.stringify(favourites));
    },
    
    toggleFavourite(cardId) {
        const favourites = this.getFavourites();
        const index = favourites.indexOf(cardId);
        if (index > -1) {
            favourites.splice(index, 1);
        } else {
            favourites.push(cardId);
        }
        this.setFavourites(favourites);
        return favourites.includes(cardId);
    },
    
    isFavourite(cardId) {
        return this.getFavourites().includes(cardId);
    },
    
    getSettings() {
        const data = localStorage.getItem(this.KEYS.SETTINGS);
        return data ? JSON.parse(data) : { fontSize: 1, animations: 'full' };
    },
    
    setSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },
    
    clearAll() {
        localStorage.removeItem(this.KEYS.GOALS);
        localStorage.removeItem(this.KEYS.FAVOURITES);
    },
    
    clearGoals() {
        localStorage.removeItem(this.KEYS.GOALS);
    },
    
    clearFavourites() {
        localStorage.removeItem(this.KEYS.FAVOURITES);
    }
};
