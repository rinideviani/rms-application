package com.employee.rms.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository; 
import com.employee.rms.data.entity.GradeHistory;

@Repository 
public interface GradeHistoryRepository extends CrudRepository<GradeHistory,Integer  > { 
	GradeHistory findById(int id );
}
