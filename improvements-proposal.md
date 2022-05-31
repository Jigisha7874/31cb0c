(1) Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API?
It can be done by fetching data with fetch API, for this i will create fetchData()It will call fetch() method with provided URL, 
then convert the result to JSON object and print it to the console
(1) In what type of hook should you use to fetch the data and why?
it should be used in useEffect()hook because using this hook this method can be used anywhere in the application.
What other considerations would you have to make?
I have to create new hook 'useEffect()' for this.

(2)Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?
Using a nanoid for keys forces the the reconciliation process to always view every element in the array as "new" or "changed",
which forces it to rerender - and that can cause some nasty side effects.
