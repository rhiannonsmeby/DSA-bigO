---Algorithms and Problem Solving Patterns
--The Basic Approach
    1. Devise a plan for solving problems
        a. Understand the problem:
            - Can I restate the problem in my own words?
            - What are the inputs? What are the outputs?
            - Can the outputs be determined from the inputs?
            - How should I label the important pieces of data that are part of the problem?
        b. Explore concrete examples:
            - Start with simple examples
            - Progress to more concrete examples
            - Explore examples with empty inputs
            - Explore examples with invalid inputs
        c. Break it down:
            - Explicitly write out the steps I need to take
            - Type up skeleton of function
        d. Solve/ simplify:
            - Solve the problem, if I can't, solve a simpler problem
            - Find the core difficulty in what I'm trying to do
            - Temporarily ignore that difficulty
            - Write a simplified solution
            - Them, incorporate the difficulty back in
        e. Lookback and refactor:
            - Can I check the result?
            - Can I dervie the result differently?
            - Can I understand it at a glance?
            - Can I use the result or method for some other problem?
            - Can I improve the performance of my solution?
            - Can I think of other ways to refactor? style? consistency? 
            - How have other people solved this problem?
    2. Master common problem solving patterns
        a. Frequency counters:
            - Uses objects or sets to collect values/ frequencies of values
            - Can often avoid the need for nested loops 
        b. Multiple pointers:
            - Creating values or pointers that correspond to an index or position and move toward the beginning, end, or middle based on a certian condition
        c. Sliding window:
            - involves creating a window which can either be an array of number from one position to another. Depending on a certian condition, the window either increases or closes (and a new window is created)
            - useful for keeping track of a subset of data in an array/string etc.
        d. Divide and Conquer: