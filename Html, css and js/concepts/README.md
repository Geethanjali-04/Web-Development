## flex box
1) flex box is used to create flexible and responsive layout

## properties
1) align-items - align items across the cross axis (vertical) , values = flex-start, flex-end, center, space-between, space-around, space-evenly
2) justify-content - align items in the main axis (horizantal), values = flex-start, flex-end, centre, space-between, space-around, space-evenly
3) flex-wrap - resize or align items responsive without resizing , values = nowrap (items may shrinks or overflowif there is no space), wrap (items move to the next line if there isnt enough space )
4) flex-direction - sets the direction of items , values = row, column, row-reverse
5) gap - space between items
6) align-content - align row of items when there isnt enough space
7) min-width and max-width - the width of the item should shrink than min-width or it doesnt expands 
8) flex-grow : 1,2, etc - describes how much an item expands to fill the available space
9) flex-shrink: 0,1,2, etc - describes how much an item shrink to sit in the space

## transform: translate();

transform: translate(x, y) moves an element from its current position:
when given in percentage it takes its elements height and width

x → Moves horizontally (positive = right, negative = left).
y → Moves vertically (positive = down, negative = up)

## animations
@keyframes identifier
0%{

}, 100%, 50% 

in element we need to apply the animation
animation: -identidier -duration -animation-timing-function(Controls the speed curve)  -no of times to repeat
## eg:
.box {
  animation: slide 2s linear 0s infinite alternate;
}

## what all we animate
## Transformations:
transform – Move, rotate, scale, or skew an element.
Example: translate, rotate, scale, skew
## Opacity and Visibility:
opacity – Fade in or out.
visibility – Show or hide elements (with some limitations).
## Positioning:
top, right, bottom, left – Move elements when positioned relatively, absolutely, or fixed.
## Dimensions:
width, height – Grow or shrink elements.
max-width, max-height, min-width, min-height
## Spacing:
margin, padding – Animate spacing around and inside elements.
## Colors:
background-color – Change background colors.
color – Animate text color.
border-color – Animate border colors.
## Borders and Outlines:
border-width, border-radius – Animate the thickness or roundness of borders.
outline, box-shadow
## Background:
background-position – Animate background images.
background-size – Animate the size of background images.