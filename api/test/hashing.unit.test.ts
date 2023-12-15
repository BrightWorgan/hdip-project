import hash from "../src/util/hashing";

describe('Hashing', () => {
    it('Correct salt and hash password', () => {
        const knownHash = '6a595acc0f46d5b111e32cd1707889b2557281dd66c65eaa5e0e15bc28ad0819';
        const expectedHash = hash('password');
        expect(expectedHash).toBe(expectedHash);
    });
});