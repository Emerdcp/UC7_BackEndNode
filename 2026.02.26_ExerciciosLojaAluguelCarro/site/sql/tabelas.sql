DROP DATABASE IF EXISTS aluguelCarro;
CREATE DATABASE aluguelCarro CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE aluguelCarro;

-- USUÁRIOS
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nivel_acesso CHAR(1) NOT NULL COMMENT 'A = Admin | O = Operador'
);

-- VEÍCULOS
CREATE TABLE veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(150) NOT NULL,
    marca VARCHAR(150) NOT NULL,
    placa VARCHAR(8) NOT NULL UNIQUE,
    categoria CHAR(1) NOT NULL COMMENT 'B = Basico | L = Luxo | F = Família',
    valor_diaria DECIMAL(10,2) NOT NULL,
    imagem VARCHAR(255) NOT NULL
);

-- AGENDAMENTOS
CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(150) NOT NULL,
    email_cliente VARCHAR(200) NOT NULL,
    veiculo_id INT NOT NULL,
    data_reserva DATETIME DEFAULT CURRENT_TIMESTAMP,
    categoria CHAR(1) COMMENT 'B = Basico | L = Luxo | F = Família',

    CONSTRAINT fk_veiculo
        FOREIGN KEY (veiculo_id)
        REFERENCES veiculos(id)
        ON DELETE CASCADE
);



-- INSERT DE VEICULOS 
INSERT INTO veiculos (modelo, marca, placa, categoria, valor_diaria) VALUES
('Onix LT 1.0', 'Chevrolet', 'ABC1D23', 'B', 120.00),
('HB20 Comfort 1.0', 'Hyundai', 'DEF2E34', 'B', 115.00),
('Gol 1.0 MPI', 'Volkswagen', 'GHI3F45', 'B', 110.00),
('Corolla XEi 2.0', 'Toyota', 'JKL4G56', 'L', 220.00),
('Civic EXL 2.0', 'Honda', 'MNO5H67', 'L', 230.00),
('Cruze LTZ 1.4 Turbo', 'Chevrolet', 'PQR6I78', 'L', 210.00),
('Compass Longitude 2.0', 'Jeep', 'STU7J89', 'S', 260.00),
('T-Cross Highline 1.4', 'Volkswagen', 'VWX8K90', 'S', 240.00),
('Creta Prestige 2.0', 'Hyundai', 'YZA9L01', 'S', 235.00),
('HR-V Touring 1.5 Turbo', 'Honda', 'BCD0M12', 'S', 250.00);



-- INSERT DE AGENDAMENTO JSON
{
"id": 1,
"nome_cliente": "Emerson de Carvalho",
"email_cliente": "emersoncarvalho@hotmail.com.br",
"veiculo_id": 1,
"categoria": "B"
}
 