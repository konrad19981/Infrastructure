

package Kontroller;

@RestController
@RequestMapping("/tasks")
public class TaskEndpoint {

    @Autowired
    public TaskEndpoint(Firestore firestore) {
    }

    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody Task task) {
        // Dodawanie zadania do Firestore
        return ResponseEntity.ok("Task created successfully.");
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<String> updateTask(@PathVariable String taskId, @RequestBody Task updatedTask) {
        // Aktualizacja zadania w Firestore
        return ResponseEntity.ok("Task updated successfully.");
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable String taskId) {
        // Usunięcie zadania z Firestore
        return ResponseEntity.ok("Task deleted successfully.");
    }
}
