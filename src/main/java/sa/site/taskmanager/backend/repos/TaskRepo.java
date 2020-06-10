package sa.site.taskmanager.backend.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import sa.site.taskmanager.backend.domain.Task;

import java.util.List;

@Repository
public interface TaskRepo extends CrudRepository<Task, Long> {


    List<Task> findByProjectIdentifierOrderByPriority(String id);

    Task findByProjectSequence(String sequence);
}
