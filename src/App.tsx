function App() {
	return (
		<>
			<h1>Rust Cheatsheets</h1>
			<h2>Methods</h2>
			<h3>.map()</h3>
			<p>Transforms every element</p>
			<code>
				{`fn multiply_by_two(vec: Vec<i32>) -> Vec<i32> {
   vec.into_iter()
      .map(|x| x * 2)
      .collect()
}`}
			</code>

			<h3>.filter()</h3>
			<p>Transforms each element that matches conditional</p>
			<code>
				{`fn only_odds(vec: Vec<i32>) -> Vec<i32> {       
   vec.into_iter()
      .filter(|x| x % 2 = 0
      .collect()
}`}
			</code>

			<h3>.chars()</h3>
			<p>Iterates over each character in a string</p>
			<code>
				{`fn char_on_new_line() {
    for character in "hello".chars() {
        println!("{character}");
}`}
			</code>

	<h3>.fold()</h3>
			<p>Reduces a collection into a single value</p>
			<code>
				{`fn sum_numbers() {
    let numbers = [1, 2, 3, 4, 5];
    let total: i32 = numbers.iter().fold(0, |acc, &x| acc + x);
        println!("The sum is: {total}");
}`}
			</code>

				<h3>.count()</h3>
			<p>Consumes an iterator and totals the elemnts</p>
			<code>
				{`fn how_many_chickens() {
    let coop = [true, false, false, true, true];
    	coop.iter
			.filter(|x| x == true)
			.count();
}`}
			</code>
      
		</>
	)
}

export default App
