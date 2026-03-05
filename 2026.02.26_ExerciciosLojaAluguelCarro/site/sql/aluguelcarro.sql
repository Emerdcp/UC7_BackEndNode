-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/03/2026 às 00:02
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `aluguelcarro`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamentos`
--

CREATE TABLE `agendamentos` (
  `id` int(11) NOT NULL,
  `nome_cliente` varchar(150) NOT NULL,
  `email_cliente` varchar(200) NOT NULL,
  `veiculo_id` int(11) NOT NULL,
  `data_reserva` datetime DEFAULT current_timestamp(),
  `categoria` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agendamentos`
--

INSERT INTO `agendamentos` (`id`, `nome_cliente`, `email_cliente`, `veiculo_id`, `data_reserva`, `categoria`) VALUES
(2, 'Karina Fernandes de Carvalho', 'karina@gmail.com', 1, '2026-02-25 22:10:28', 'B'),
(3, 'Emerson de Carvalho', 'emersoncarvalho@hotmail.com.br', 1, '2026-02-25 22:16:10', 'B'),
(4, 'Emerson de Carvalho', 'emersoncarvalho@hotmail.com.br', 1, '2026-02-25 22:17:23', 'B'),
(5, 'Emerson de Carvalho', 'emersoncarvalho@hotmail.com.br', 1, '2026-02-25 22:18:24', 'B'),
(6, 'Emerson de Carvalho', 'emersoncarvalho@hotmail.com.br', 1, '2026-02-26 22:09:16', 'B'),
(7, 'Olá, tudo bem', 'tudobem@gmail.com', 1, '2026-02-26 22:11:34', 'B'),
(8, 'Olá, tudo bem', 'tudobem@gmail.com', 1, '2026-02-26 22:11:35', 'B'),
(9, 'Olá, tudo bem', 'tudobem@gmail.com', 1, '2026-02-26 22:12:05', 'B'),
(10, 'Teste', 'teste@teste.com', 1, '2026-02-26 22:17:27', 'L'),
(11, 'Emerson', 'gordinho@lancher.com.br', 1, '2026-02-27 19:33:45', 'B'),
(12, 'kadu Fernandes', 'kadu@gmail', 2, '2026-03-04 21:53:32', 'u');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel_acesso` char(1) NOT NULL COMMENT 'A = Admin | O = Operador',
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `senha`, `nivel_acesso`, `nome`) VALUES
(1, 'emersoncarvalho@hotmail.com.br', '$2b$10$PO.5j3UB/KIxSvbnzllY1OJUoTYA.C86Y.eSy1lMNtFFq8GTX2nsG', 'A', 'Emerson'),
(2, 'kadu@gmail.com', '$2b$10$9vIxyyibBUWii/gChlCbMOtcuh40jGIIDgBCJf13mbzVkS0Wvs0EK', 'O', 'Kadu');

-- --------------------------------------------------------

--
-- Estrutura para tabela `veiculos`
--

CREATE TABLE `veiculos` (
  `id` int(11) NOT NULL,
  `modelo` varchar(150) NOT NULL,
  `marca` varchar(150) NOT NULL,
  `placa` varchar(8) NOT NULL,
  `categoria` char(1) NOT NULL COMMENT 'B = Basico | L = Luxo | S = SUV',
  `valor_diaria` decimal(10,2) NOT NULL,
  `imagem` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `veiculos`
--

INSERT INTO `veiculos` (`id`, `modelo`, `marca`, `placa`, `categoria`, `valor_diaria`, `imagem`) VALUES
(1, 'Onix LT 1.0', 'Chevrolet', 'ABC1D23', 'B', 100.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(2, 'HB20 Comfort 1.0', 'Hyundai', 'DEF2E34', 'B', 110.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(3, 'Gol 1.0 MPI', 'Volkswagen', 'GHI3F45', 'B', 110.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(4, 'Corolla XEi 2.0', 'Toyota', 'JKL4G56', 'L', 220.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(5, 'Civic EXL 2.0', 'Honda', 'MNO5H67', 'L', 230.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(6, 'Cruze LTZ 1.4 Turbo', 'Chevrolet', 'PQR6I78', 'L', 210.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(7, 'Compass Longitude 2.0', 'Jeep', 'STU7J89', 'F', 260.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(8, 'T-Cross Highline 1.4', 'Volkswagen', 'VWX8K90', 'F', 240.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(9, 'Creta Prestige 2.0', 'Hyundai', 'YZA9L01', 'F', 235.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(10, 'HR-V Touring 1.5 Turbo', 'Honda', 'BCD0M12', 'F', 250.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(11, 'C4 Lounge', 'Citroen@hotmail.com.br', 'AB1C111', 'L', 130.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(12, 'Teste', 'Teste', '13215465', 'B', 90.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(15, 'aquele teste', 'aquele', 'aeratrar', 'B', 130.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(18, 'aquele teste', 'aquele', '456344q', 'B', 130.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(19, 'aquele teste', 'Teste', '1348964', 'L', 122.00, 'https://combustivel.app/imgs/t650/consumo-c4-lounge-tendance-1-6-turbo-2.jpg'),
(20, 'undefined', 'undefined', 'undefine', 'u', 0.00, 'undefined');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agendamentos`
--
ALTER TABLE `agendamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_veiculo` (`veiculo_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`email`);

--
-- Índices de tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `placa` (`placa`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agendamentos`
--
ALTER TABLE `agendamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `veiculos`
--
ALTER TABLE `veiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agendamentos`
--
ALTER TABLE `agendamentos`
  ADD CONSTRAINT `fk_veiculo` FOREIGN KEY (`veiculo_id`) REFERENCES `veiculos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
