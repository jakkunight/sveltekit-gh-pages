<script>
    import "../app.css";
    import CounterButton from "../components/CounterButton.svelte";
    import { base } from "$app/paths";
</script>
<div class="h-screen w-screen bg-black text-gray-300 font-mono text-lg flex flex-grow items-center justify-center" >
    <CounterButton />
    <slot></slot>
    <div>
    <a href="{base}/blog/1">
        <button>
            GO!
        </button>
    </a>
</div>
</div>
