package sa.site.taskmanager.backend.repos;

import org.springframework.data.repository.CrudRepository;
import sa.site.taskmanager.backend.domain.Backlog;

public interface BacklogRepo extends CrudRepository<Backlog, Long> {

    Backlog findByProjectIdentifier(String Identifier);
}
