import {it, expect, describe} from 'vitest'
import { commonKeys, compareObjectArrays, compareObjects } from './functions'

describe ('compareObjects', () => {

    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    const obj3 = { a: 1, b: 2, d: 4 };
    const obj4 = {};
    const obj5 = {};
    const Akos = { name: "Akos", age: 17, city: "Puspokladany" };

    it('identical key-value pairs', () => {
        expect(compareObjects(obj1, obj2)).toBe(true);
    });

    it('should return false for different objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        
        expect(compareObjects(obj1, obj3)).toBe(false);
    });

    it('empty objects', () => {
        expect(compareObjects(obj4, obj5)).toBe(true);
    });

    it('should handle real world objects correctly', () => {
        expect(compareObjects(Akos, Akos)).toBe(true);
        expect(compareObjects(Akos, {name: "Joska", age: 30, city: "Kazincbarcika"})).toBe(false);
    });
})

describe ('compareObjectArrays', () => {
    const objarray1 = [
        {a: 1, b: 2, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 7, h: 8, i: 9},
        {j: 10, k: 11, l:12},
    ]

    const objarray2 = [
        {a: 1, b: 2, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 7, h: 8, i: 9},
        {j: 10, k: 11, l:12},
    ]

    const objarray3 = [
        {a: 1, b: 420, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 96, h: 8, i: 9},
        {j: 10, k: 11, l:12},
    ]

    const objarray4 = [
        {a: 1, b: 420, c: 3},
        {d: 4, e: 5, f: 6},
        {g: 96, h: 8, i: 9},
    ]

    const objarray5 = [
        {id: 1, name: "Akos", age: 17, city: "Puspokladany"},
        {id: 2, name: "Joska", age: 30, city: "Kazincbarcika"},
        {id: 3, name: "Jozsef", age: 20, city: "Szeged"},
        {id: 4, name: "Arpad", age: 47, city: "Pocsaj"},
        {id: 5, name: "Krisztian", age: 32, city: "Szeged"},
        {id: 6, name: "Tom", age: 17, city: "Pecs"},
        
    ]
    it('should return true for arrays of identical objects', () => {
        expect(compareObjectArrays(objarray1, objarray2)).toBe(true);
    });

    it('should return false for arrays of different objects', () => {
        expect(compareObjectArrays(objarray1, objarray4)).toBe(false);
    });

    it('should return false for arrays of different length', () => {
        expect(compareObjectArrays(objarray1, objarray3)).toBe(false);
    });
    
    it('should handle real world objects correctly', () => {
        expect(compareObjectArrays(objarray5, objarray5)).toBe(true);
    });
})

describe('commonKeys', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, d: 4 };
    const obj3 = { a: 7, b: 6, c: 5 };
    
    it('should return an array of common keys', () => {
        expect(commonKeys(obj1, obj2)).toEqual(['a', 'b']);
    });
    it('if no common keys', () => {
        expect(commonKeys(obj1, obj3)).toEqual([]);
    });
    it('should handle empty objects', () => {
        expect(commonKeys({}, {})).toEqual([]);
    });
    it('should handle real world objects correctly', () => {
        expect(commonKeys({name: "Akos", age: 17, city: "Puspokladany"}, {name: "Akos", age: 17, city: "Puspokladany"})).toEqual(["name", "age", "city"]);
    });
})