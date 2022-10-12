WITH temp AS (
    SELECT user1_id FROM users_relationship WHERE user2_id = 19
)
SELECT
    users_relationship.user1_id, users_relationship.user2_id
FROM users_relationship 
INNER JOIN temp ON users_relationship.user2_id = temp.user1_id;
WHERE users_relationship.user1_id = 19
ORDER BY RANDOM()
LIMIT 2;

SELECT id from users 
WHERE id NOT IN (
    SELECT user2_id FROM users_relationship WHERE user1_id = 15
) 
AND id != 15
ORDER BY RANDOM()
LIMIT 5;