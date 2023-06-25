<script lang="ts">
    import "../app.css";
    let count:number = 0;
    const handleClick = (e:any) => {
        count = count + 1;
    }
</script>
<div class="bg-black flex-1 justify-center items-center h-screen w-screen text-gray-300" >
    <h1 class="font-bold font-mono text-center text-8xl " >
        Bienvenido!
    </h1>
    <button on:click={handleClick}>
        {"You pressed me " + count + " times!"}
    </button>
</div>