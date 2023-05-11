var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    // Clear forward history
    this.history.splice(this.currentIndex + 1);
    
    // Add new URL to history
    this.history.push(url);
    
    // Update current index
    this.currentIndex = this.history.length - 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    // Calculate the maximum number of steps to move back
    const maxSteps = Math.min(steps, this.currentIndex);
    
    // Update current index
    this.currentIndex -= maxSteps;
    
    // Return the current URL
    return this.history[this.currentIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    // Calculate the maximum number of steps to move forward
    const maxSteps = Math.min(steps, this.history.length - 1 - this.currentIndex);
    
    // Update current index
    this.currentIndex += maxSteps;
    
    // Return the current URL
    return this.history[this.currentIndex];
};