<script>
    import "../app.css";
    let count = 0;
    const increaseCount = (event) => {
        event.preventDefault();
        count = count + 1;
    };
</script>
<button on:click={increaseCount} >
    {"["}You pressed me {count} times!{"]"}
</button>