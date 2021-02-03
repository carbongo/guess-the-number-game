
# 'Guess the number' Game

## Description
A simple 'guess the number' game on Node.js. With human-friendly interface.

## Initialisation

> NOTE: Linking/unlinking may require *sudo* rights 

Before use:
```bash
npm link
```

After use:
```bash
npm unlink
```

## Usage

### Examples

```bash
$ gtng
Hiya! So, here is the deal: I will pick a number 0 to 100. Then you have to guess the secret number. If your guess is too high or low, you will get a hint. Deal? (y/n)
y
Ok. Number is ready! I am listening your guess.
25
Wrong, the number is bigger.
50
Nope, try again. My number is bigger.
70
Pardon me, but my number is less than that.
65
Oi-oi! You guessed it precisely! Do you want to play it again? (y/n)
n
I hope I will see you again!
```