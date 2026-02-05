1 - trazer apenas 12 primeiros produtos;
```sql
"SELECT * FROM produtos WHERE id <= 12 "
```

2 - trazer apenas produtos que comecem com a letra A;
```sql
"SELECT * FROM produtos WHERE titulo LIKE 'A%'"
```

3 - trazer apenas produtos que tenham o preço de 410;
```sql
"SELECT * FROM produtos WHERE preco = 410"
```

4 - trazer apenas produtos com avaliação 4 e 5;
```sql
"SELECT * FROM produtos WHERE avaliacao >= 4 and avaliacao <= 5"
```

5 - trazer apenas produtos com avaliação 1 e 5;
```sql
"SELECT * FROM produtos WHERE avaliacao in (1,5)"
```

6 - trazer apenas produtos entre id 21 e 32;
```sql
"SELECT * FROM produtos WHERE id >= 21 and id <=32"
```

7 - trazer apenas os 12 últimos produtos;
```sql
"SELECT * FROM produtos order by id desc limit 12"
```

8 - trazer apenas os 12 primeiros produtos com avaliação 5;
```sql
"SELECT * FROM produtos WHERE avaliacao = 5 ORDER BY id ASC LIMIT 12"
```

9 - trazer apenas produtos em ordem de preço do menor para o maior;
```sql
"SELECT * FROM produtos ORDER BY preco ASC"
```

10 - trazer apenas produtos em ordem de avaliação do menor para o maior;
```sql
"SELECT * FROM produtos ORDER BY avaliacao ASC"
```