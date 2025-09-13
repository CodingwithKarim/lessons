import time

def task(task: str, duration: float) -> None:
    print(f"Task {task} started")
    
    time.sleep(duration)
    
    print(f"Task {task} finished after {duration} seconds")
    
def main():
    start_time = time.perf_counter()
    
    task("A", 1)
    task("B", 2)
    task("C", 3)
    
    elapsed_time = time.perf_counter() - start_time
    print(f"Total time elapsed: {elapsed_time:.2f} seconds")
    
if __name__ == "__main__":
    main()