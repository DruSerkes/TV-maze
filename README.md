TV-maze project! 


**
What this project was about: 

This project was intended to get me familiar with how to make get requests to API's, how to handle and display data, 
and how to write modular code in which functions perform their own separate tasks and work together. 

** 
What I did: 

I was given a good amount of starter code. Other than adding a few bootstrap classes for styling, the html document was
otherwise untouched. 

The JS doc had some of the functions laid out with instructions already to provide project expectations and directions for 
how each function should operate. I wrote functions that followed the logic: 
1. Handle a form submission by preventing page refresh, saving a search query to a variable, and clearing the text field.
2. Pass that information to a function that gets data from the TV-maze API, then awaiting and saving the returned data.  
3. Pass that data to another function that clears the container, creates a column and card div for every movie in the returned
list, and appends them to the DOM. Every card also includes a button to get episode information...
4. Handle that button click by revealing the episodes area (currently bottom of the page but I'd like to make this a modal),
and getting the id of that show (based on the data returned and saved from earlier). 
5. Pass that id to a function that gets the episodes of that tv show from the TV-maze API, then save the resulting list. 
6. Pass that list to a function that populates the newly revealed episodes area list with information about every episode.  

**
What I learned:

This project REALLY gave me a clearer view of how functions should have their own task and interact with one another. 
I can see how helpful it would be to understand or modify the code when it is written in this fashion, because each function has 
it's own job. They interact with one another, but the memory is separate from what is displayed to the user in the DOM.
This project also has left me feeling empowered as I gain confidence in the potential of what I can write, but also in my 
ability to read and comprehend documentation (as I had to read the docs for API's and the frameworks I've used before 
working with them).

**
Looking forward: 

I'd like to get the episodes button to reveal the episodes as a bootstrap modal component rather than a (pretty messy) ul. 
I spent an hour trying to get this to work already, but even copy/pasting the code in my html doc wouldn't work for some reason
