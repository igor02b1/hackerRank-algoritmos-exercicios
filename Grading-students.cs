/*
link do exercicio: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
*/


public static List<int> gradingStudents(List<int> grades)
{
     List<int> roundedGrades = new List<int>();

    foreach (int grade in grades)
    {
        int multipleDifference = Math.Abs(5 - (grade % 5));

        if (grade < 38)
        {
            roundedGrades.Add(grade);
        }
        else if (multipleDifference < 3)
        {
            int increasedGrade = grade + multipleDifference;
            roundedGrades.Add(increasedGrade);
        }
        else
        {
            roundedGrades.Add(grade);
        }
    }

    return roundedGrades;
}
