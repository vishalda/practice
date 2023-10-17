package com.practice.springBoot.question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class QuestionService {
	@Autowired
	private QuestionDao questionDao;
	
	public List<Question> getAllQuestions(){
		return questionDao.findAll();
	}
	
}
