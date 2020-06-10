package sa.site.taskmanager.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sa.site.taskmanager.backend.domain.Backlog;
import sa.site.taskmanager.backend.domain.Project;
import sa.site.taskmanager.backend.domain.Task;
import sa.site.taskmanager.backend.exceptions.ProjectNotFoundException;
import sa.site.taskmanager.backend.repos.BacklogRepo;
import sa.site.taskmanager.backend.repos.ProjectRepo;
import sa.site.taskmanager.backend.repos.TaskRepo;


@Service
public class TaskService {

    @Autowired
    private TaskRepo taskRepo;

    @Autowired
    private BacklogRepo backlogRepo;

    @Autowired
    private ProjectRepo projectRepo;


    public Task addTask(String projectIdentifier, Task task) {

        try {
            Backlog backlog = backlogRepo.findByProjectIdentifier(projectIdentifier);
            task.setBacklog(backlog);
            Integer BacklogSequence = backlog.getPTSequence();
            BacklogSequence++;

            backlog.setPTSequence(BacklogSequence);

            task.setProjectSequence(backlog.getProjectIdentifier() + "-" + BacklogSequence);
            task.setProjectIdentifier(projectIdentifier);
            if (task.getStatus() == "" || task.getStatus() == null) {
                task.setStatus("TO_DO");
            }

            if (task.getPriority() == 0 || task.getPriority() == null) {
                task.setPriority(3);
            }

            return taskRepo.save(task);
        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not Found");
            //throw new IllegalArgumentException();
            //Todo: fix here
        }

    }

    public Iterable<Task> findBacklogById(String id) {

        Project project = projectRepo.findByProjectIdentifier(id);

        if (project == null) {
            throw new ProjectNotFoundException("Project ID: '" + id + "' not found");
        }

        return taskRepo.findByProjectIdentifierOrderByPriority(id);
    }


    public Task findPTByProjectSequence(String backlog_id, String pt_id) {

        Backlog backlog = backlogRepo.findByProjectIdentifier(backlog_id);
        if (backlog == null) {
            throw new ProjectNotFoundException("Project : '" + backlog_id + "' not found");
        }

        Task task = taskRepo.findByProjectSequence(pt_id);

        if (task == null) {
            throw new ProjectNotFoundException("Task '" + pt_id + "' not found");
        }

        if (!task.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Task '" + pt_id + "' does not exist in project: '" + backlog_id);
        }
        return task;
    }

    public Task updateByProjectSequence(Task updatedTask, String backlog_id, String pt_id) {
        Task task = findPTByProjectSequence(backlog_id, pt_id);

        task = updatedTask;

        return taskRepo.save(task);
    }


    public void deletePTByProjectSequence(String backlog_id, String pt_id) {
        Task task = findPTByProjectSequence(backlog_id, pt_id);
        taskRepo.delete(task);
    }
}
