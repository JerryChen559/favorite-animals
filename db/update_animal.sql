UPDATE animal
SET animal_name = $2, legs= $3
WHERE id = $1;

SELECT *
FROM animal;