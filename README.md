# Aadrila AI – Frontend Assignment

This project is a Figma-to-code implementation of the Aadrila AI landing experience, focused mainly on the loading screen and hero section, which are the most animation-heavy parts of the design.

## What’s included

- A branded loading screen with a smooth logo reveal and transition into the navbar  
- An animated hero section with three rotating document cards  
- A vertical scan effect on the front card to represent AI document processing  
- Desktop layout matched closely to the Figma  
- Responsive behavior for smaller screens  

## How it works

The hero cards are driven by a small state-based rotation system.  
Three documents move between left, center, and right positions, with size and blur changing to create depth and focus.

The scan animation runs only when a card is in the center, so it feels tied to user focus instead of looping randomly.

The loader and navbar share the same logo using Framer Motion’s layout animation for a smooth transition.

## Notes

I focused on the most complex and user-facing parts of the design (loader and hero) to keep quality high within the available time. The remaining sections can be added in the same structure if needed.

## Tech

React, Tailwind CSS, Framer Motion

