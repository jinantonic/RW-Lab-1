# Problem 1

- Create a flexible grid with 1 row and 4 columns.
- The width of each column is 25% of the window size. 
- This percentage width must be maintained even if the page is resized.
- Each cell of the grid can contain another 1x4 flexible grid.
- The border of the grid must be 1px black.

</br>
Perform the following operations based on the valueof window size:

- If the window size is less than 720px, then the 1x4 flexible grid becomes a 2x2 grid. That is, the 3rd and 4th columns slide down onto the 2nd row.
- If the window size is less than 360px, then the 1x4 flexible grid becomes 4x1 grid. Each column slides under the one before it. The 2nd column slides under the 1st, the 3rd slides under the 2nd, and the 4th slides under the 3rd.
- DO NOT USE BOOTSTRAP!
</br></br>

# My solution
![Sketch](/images/1x4.png)
This is the flexible grid with 1 row and 4 columns.</br>
If the window size is greater than or equal to 720px, it is displaying the 1x4 flexible grid.
</br></br></br>

![Sketch](/images/2x2.png)
This is the flexible grid with 2 rows and 2 columns.</br>
If the window size is less than 720px and greater than or equal to 360px, the 1x4 grid becomes 2x2 grid.</br>
As you can see in the image above, the 3rd and 4th columns slide down onto the 2nd row.
</br></br></br>

![Sketch](/images/4x1.png)</br>
This is the flexible grid with 4 rows and 1 column.</br>
If the window size is less than 360px, the 1x4 grid becomes 4x1 grid.</br>
As you can see in the image above, the 2nd column slides under the 1st, the 3rd slides under the 2nd, and the 4th slides under the 3rd.
