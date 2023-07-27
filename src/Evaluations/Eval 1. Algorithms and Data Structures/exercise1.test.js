const palindromeChecker = require("./exercise1");

describe('palindromeChecker', () => {
    it('should return true for a palindrome', () => {
        expect(palindromeChecker('racecar')).toBe(true);
        expect(palindromeChecker('madam')).toBe(true);
        expect(palindromeChecker('a')).toBe(true);
      });
    
      it('should return false for a non-palindrome', () => {
        expect(palindromeChecker('hello')).toBe(false);
        expect(palindromeChecker('openai')).toBe(false);
      });
})