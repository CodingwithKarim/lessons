import asyncio
import time
import aiohttp
import requests

URL = "https://jsonplaceholder.typicode.com/users/1"
REQUEST_COUNT = 40

def run_sync():
    # Record start time
    t0 = time.perf_counter()
     
    # Loop x times and make a synchronous request
    for _ in range(REQUEST_COUNT):
        requests.get(URL)
    
    # Calculate elapsed time  
    elapsed_time = time.perf_counter() - t0
    print(f"Total sync time: {elapsed_time:.2f}s\n")

async def run_async():
    # Record start time
    t0 = time.perf_counter()
    
    # Build a http client using aiohttp library
    session = aiohttp.ClientSession()
    
    try:
        # Build list of async requests 
        tasks = [session.get(URL) for _ in range(REQUEST_COUNT)]
        
        # Execute requests concurrently and wait for all to complete
        await asyncio.gather(*tasks)
    finally:
        await session.close()
        
    # Calculate elapsed time 
    elapsed = time.perf_counter() - t0
    print(f"Total async time: {elapsed:.2f}s")

if __name__ == "__main__":
    run_sync()
    asyncio.run(run_async())