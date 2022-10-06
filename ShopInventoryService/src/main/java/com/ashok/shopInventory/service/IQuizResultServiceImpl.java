package com.ashok.shopInventory.service;

import com.ashok.shopInventory.entity.QuizResult;

import java.util.List;

public interface IQuizResultServiceImpl {
    QuizResult save(QuizResult quizResult);

    List<QuizResult> getResultByCourseAndSubjectAndQuizNumber(String course, String subject, String quizNumber);

    List<QuizResult> getResultByCourseAndSubjectAndQuizNumberAndUser(String course, String subject, String quizNumber, long parseLong);
}
