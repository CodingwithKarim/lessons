import asyncio
import time

async def welcome() -> str:
    return "Welcome to Async lesson in Python!\n"

async def task(task: str, duration: int):
    print(f"Task {task} started")
    
    await asyncio.sleep(duration)
    
    print(f"Task {task} finished after {duration} seconds")
    
async def main():
    welcome_message = await welcome()
    
    print(welcome_message)
    
    start_time = time.perf_counter()
    
    await asyncio.gather(
        task("A", 1),
        task("B", 2),
        task("C", 3)
    )
    
    elapsed_time = time.perf_counter() - start_time
    
    print(f"Total time elapsed: {elapsed_time:.2f} seconds")
    
if __name__ == "__main__":
    asyncio.run(main())