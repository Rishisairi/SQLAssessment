# ACID PROPERTIES

## Atomicity

--i should'nt have an inconsistency in data
--if one happens then other should also happen
--either both should pass or both should fail
-- not should be in condition of one pass one fail
-- ex; amazon products table and order table both insert and updayte should happen
![alt text](<Screenshot 2024-06-24 164914.png>)

## Consistency

can't have ghost data
can't have un accounted data
![alt text](<Screenshot 2024-06-24 165505.png>)

## Isolation

locking a particular value , only particular ticket should be done without affecting others

![alt text](<Screenshot 2024-06-24 165725.png>)

## Durability

Rollback
all should be as saved data
failure happens after the transaction then the data must be saved

during transaction - atomicity
after transaction - durability

![alt text](<Screenshot 2024-06-24 170001.png>)

# TRANSACTIONS IN DATABASE

```sql
Begin TRANSACTION
update
COMMIT TRANSACTION
```

![alt text](<Screenshot 2024-06-24 173156.png>)

![alt text](<Screenshot 2024-06-24 173515.png>)

### above one is the isolation from acid properties

# Views

it is copy by reference
update can happen on main table not on views table so main table is updated
joins can be used in view table
if we have multiple tables joined under view table multiple tables gets updated but wrongly gets updated

# Rank, dense rank ,row number ,partition by ,

# partition by vs group by

partition won't summarize it cagegorizes the data
if we have 30 rows the it gives all 30 rows but it categorizes the data

group by is exactly opposite it summarizes the data

#

```sql
SELECT last_name, salary, department_id
FROM employees outer
WHERE salary >
(SELECT AVG(salary)
FROM employees
WHERE department_id =
outer.department_id group by department_id);
```
