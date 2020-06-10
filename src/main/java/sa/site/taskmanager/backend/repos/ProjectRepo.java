package sa.site.taskmanager.backend.repos;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import sa.site.taskmanager.backend.domain.Project;

@Repository
public interface ProjectRepo extends CrudRepository<Project, Long> {

    Project findByProjectIdentifier(String projectId);

    @Override
    Iterable<Project> findAll();
}
