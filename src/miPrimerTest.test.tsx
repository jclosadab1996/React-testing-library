import { describe, it, expect } from "vitest";

describe("Mi primer test", () => {
  it("la suma de dos numeros", () => {
    const suma = (a: number, b: number) => a + b;
    const resultado = suma(2, 3);
    expect(resultado).toBe(5);
  });

  it("dos textos iguales", () => {
    const text1 = "Platzi conf";
    const text2 = "Platzi conf";
    expect(text1).toBe(text2);
  });
});

it("Should be palindrome", () => {
  const palindromeVerify = (word: string) => {
    const reverseWord = word.split("").reverse().join("");
    if (reverseWord === word) return true;
    return false;
  };

  const isPalindrome = palindromeVerify("oso");
  expect(isPalindrome).toBe(true);
});
