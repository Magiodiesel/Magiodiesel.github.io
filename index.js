<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Datos Magio</title>
    <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=57TDiuTFRyyxvhTughl9Eokgcy2s7GvwiGc5EDP5nBvjYkCN23wCbTC74m0lD566wlpvwI8s48bUbqpPqYpeb2SNpihSn9ttIzpwi2cB2DjlZLy0C7XTUSCO79k6uJybhnaGzc6W3g6hvBG8EGudkXaFEwIT5ageaWocIwbxTjva8pWBhM13JKxfONns9Q_MiETWvOf1bxGYbFJ7v7Vj7nsEx7tUi0pDqpW2PNRzoouezrusIyP2hHoF5X7yXQ7IhZnqy9hb5mZf1i63-T99IJko5ppko54uUIGlKJt9oJVWcrEqQWcNrApSRbrmpV9TACs7awP3i_TgkTpbWx0g_T93NPbl0sppcydHpDOFhhuoRPACjhCvbmQGI6IxzfTb52jOynI_bOUrsu1agpEW2F0YxcYC_fIHS5bpEVCyDyG0S1ZDXh8Bceplnn664t5PKUbnv4jH6zwMInlvajO3XZsawAlQlxBvZvDpmKV6dKFdUnsUwKqT32XsZ078KVqET9vB8yXXc729v_DoVogZIwGhaEy0P62YVqj_qPUT6cQPaaa3JidRt76i0S5l6Dlcnh7E-52xyn1XBWCvEEhm47xkNwPWhOy4IVvO-NZSOm6Rvp2Vp6TC_iqBYUuLuo6xzrTYK5cWI4HHm_mLNTHLdPfvjeY8MlV6niX8WQpOEpoNgMTMn3Wbk17INqI5aBmTa7FH7dfJtXzk1aA-UFndAK16mVqSBpTkfy2bU5aPjXRCrfrCNgYEayWfZDXiOPJsEbo3aH5EbxRcigTuGAVmoQ4EsSq8ojprHCDqkts63arTb-omUwX5v_UFEmDVs7oMJPWiZHSPOqdDff_1LgJJ2da2RL9LH2jpbj7wlgw04o5fGNyNir1aoXg8OojfgYQ_oXUYlU9zAfzXRARtn1EYKb4N9l7dV6qAVUHZB9XvWINEGfaHrHmgdFAR7GMwuQG7eMMlidK2l6i2QxOXxv2aOPv8dgvRIaM0kakhYmuXqelfjWRJ_3sDxbM_y6AvZUFUAD8cQEqHrt6lwtO2YNCZkY7AQt4AbBoWhHc2ErQoM95a0_TXqRIGpM1N02ggswAByJwtFajlIF69uKDc4QFbJAfuVoXCHaerU9f16Al3pnkhnumw-AaDaN6lfUBru7Tli8UZ3JIh1E2ClU6xPSwZ0jh8XmVlGPqowARjT8H5ju16TGrdkAHXI3eSToarcsSCLp1nSYD1VuNSVkog07AT3evQ9MH9FzFG1uyAalRV5CaviTSTFazjESTMhsZUUpyUpH3oOvnNKLAOqx_FheLyszRnYqj2xbmtbHqCISQHvp2xHwq-oPGYFAjfIpmxb-hQchhtPzef3xvhJkdgPdTt_MdrtFIgCeAgMZhpRxQjk2wF6m3eI2nHPbm81u-1GkmeDieO_yauPnS0pGRtYOwj42pxHz8_WQNHkyohZ9u3vhPdPvnEGpYi2uATvX_TXdr3fkJEEr4aE5C4Na62Vxxal_rQ1B0f6ebMh40dov7ca-ghilzl1aiRxnPjYIIqMSmsxtDFsHrZwPIuIv-G-hHWO6a63cEcwHoIZL5FfmChiHJyB3q9MJqWN8cMrmWf0-x1_X5DzaMSmfOKgpsyoDcm73U7RYAO9tL-VehlhnkhIw9alLtq-Wcw1qKADFQeAp9caO2BxYZ4POVx2zdpL2Yvhw" nonce="560a91b1a88b7c520f3c98089646c92e" charset="UTF-8"></script><style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 100%;
        }
        
        h1 {
            text-align: center;
            padding: 20px;
            background-color: #2c3e50;
            color: white;
            margin-bottom: 0;
        }
        
        .tabs {
            display: flex;
            background-color: #34495e;
        }
        
        .tab {
            padding: 15px 20px;
            cursor: pointer;
            color: white;
            flex-grow: 1;
            text-align: center;
            transition: background-color 0.3s;
        }
        
        .tab:hover {
            background-color: #2c3e50;
        }
        
        .tab.active {
            background-color: #1abc9c;
            font-weight: bold;
        }
        
        .content {
            display: none;
            padding: 20px;
        }
        
        .content.active {
            display: block;
        }
        
        .form-container {
            margin-bottom: 30px;
            padding: 20px;
            background-color: #ecf0f1;
            border-radius: 8px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #bdc3c7;
            border-radius: 4px;
            font-size: 16px;
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        
        .buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        button {
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .search-container {
            margin-bottom: 20px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #3498db;
            color: white;
        }
        
        tr:hover {
            background-color: #f5f5f5;
        }
        
        .empty-message {
            text-align: center;
            margin: 20px;
            color: #7f8c8d;
            font-style: italic;
        }
        
        .actions-cell {
            display: flex;
            gap: 5px;
        }
        
        .btn-edit {
            background-color: #f39c12;
        }
        
        .btn-edit:hover {
            background-color: #d35400;
        }
        
        .btn-delete {
            background-color: #e74c3c;
        }
        
        .btn-delete:hover {
            background-color: #c0392b;
        }

        /* Estilos para el Login */
        #login-container {
            width: 100%;
            max-width: 400px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            transform: scale(1);
            transition: transform 0.3s ease;
        }
        
        #login-container.shake {
            animation: shake 0.5s;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        #login-header {
            text-align: center;
            padding: 25px 20px;
            background-color: #2c3e50;
            color: white;
        }
        
        #login-header h2 {
            margin: 0;
            font-size: 24px;
        }
        
        #login-logo {
            font-size: 50px;
            margin-bottom: 15px;
        }
        
        #login-form {
            padding: 30px;
        }
        
        #password-container {
            position: relative;
            margin-bottom: 25px;
        }
        
        #password {
            width: 100%;
            padding: 12px 15px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 6px;
            transition: border-color 0.3s;
        }
        
        #password:focus {
            border-color: #3498db;
            outline: none;
        }
        
        #toggle-password {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #777;
            cursor: pointer;
            padding: 5px;
        }
        
        #login-button {
            width: 100%;
            padding: 12px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        #login-button:hover {
            background-color: #2980b9;
        }
        
        #error-message {
            color: #e74c3c;
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
            height: 20px;
        }
        
        .password-requirements {
            margin-top: 10px;
            color: #7f8c8d;
            font-size: 12px;
        }
        
        /* Spinner de carga */
        #loading-spinner {
            display: none;
            text-align: center;
            margin-top: 10px;
        }
        
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border-top: 4px solid #3498db;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Animación de aparición */
        .hidden {
            display: none;
        }
        
        .fade-in {
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Animación botón de acceso */
        #login-button.progress {
            background-color: #2ecc71;
            position: relative;
            overflow: hidden;
        }
        
        #login-button.progress::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: rgba(255, 255, 255, 0.2);
            animation: progress 1s forwards;
        }
        
        @keyframes progress {
            to { width: 100%; }
        }
        
        /* Animación de logo */
        #login-logo {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        /* Ocultar inicialmente la base de datos */
        #database-container {
            display: none;
        }

        /* Header con botón de logout */
        .header-with-logout {
            position: relative;
        }
        
        #logout-button {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 8px 12px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
        }
        
        #logout-button:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <!-- Contenedor de inicio de sesión -->
    <div id="login-container">
        <div id="login-header">
            <div id="login-logo">🔐</div>
            <h2>MAGIO DIESEL</h2>
            <p>Sistema de Base de Datos</p>
        </div>
        <div id="login-form">
            <div id="password-container">
                <input type="password" id="password" placeholder="Ingrese la contraseña" autocomplete="off">
                <button id="toggle-password" type="button">👁️</button>
            </div>
            <button id="login-button">Iniciar Sesión</button>
            <div id="loading-spinner">
                <div class="spinner"></div>
            </div>
            <p id="error-message"></p>
        </div>
    </div>

    <!-- Contenedor de la base de datos (inicialmente oculto) -->
    <div id="database-container" class="container">
        <div class="header-with-logout">
            <h1>Base de Datos Magio</h1>
            <button id="logout-button">Cerrar Sesión</button>
        </div>
        
        <div class="tabs">
            <div class="tab active" data-city="ibague">Ibagué</div>
            <div class="tab" data-city="villavicencio">Villavicencio</div>
            <div class="tab" data-city="ricaurte">Ricaurte</div>
            <div class="tab" data-city="neiva">Neiva</div>
        </div>
        
        <!-- Ibagué -->
        <div class="content active" id="ibague">
            <div class="form-container">
                <h2>Agregar Carro en Ibagué</h2>
                <div class="form-group">
                    <label for="ibague-marca">Marca:</label>
                    <input type="text" id="ibague-marca" placeholder="Ej: Kodiak">
                </div>
                <div class="form-group">
                    <label for="ibague-num-vehiculo">Número de Vehículo:</label>
                    <input type="text" id="ibague-num-vehiculo" placeholder="Ej: 12345">
                </div>
                <div class="form-group">
                    <label for="ibague-placa">Placa:</label>
                    <input type="text" id="ibague-placa" placeholder="Ej: ABC123">
                </div>
                <div class="form-group">
                    <label for="ibague-ciudad">Ciudad:</label>
                    <select id="ibague-ciudad">
                        <option value="Ibagué">Ibagué</option>
                        <option value="Mariquita">Mariquita</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ibague-fecha">Fecha del Servicio:</label>
                    <input type="date" id="ibague-fecha">
                </div>
                <div class="form-group">
                    <label for="ibague-servicio">Servicio Realizado:</label>
                    <textarea id="ibague-servicio" placeholder="Describa el servicio o reparación realizada..."></textarea>
                </div>
                <div class="buttons">
                    <button id="ibague-agregar">Guardar</button>
                    <button id="ibague-limpiar">Limpiar</button>
                </div>
            </div>
            
            <div class="search-container">
                <div class="form-group">
                    <label for="ibague-buscar">Buscar:</label>
                    <input type="text" id="ibague-buscar" placeholder="Buscar por marca, placa, servicio...">
                </div>
            </div>
            
            <h2>Listado de Carros en Ibagué</h2>
            <div id="ibague-tabla">
                <p class="empty-message">No hay carros registrados en Ibagué</p>
            </div>
        </div>
        
        <!-- Villavicencio -->
        <div class="content" id="villavicencio">
            <!-- Contenido similar a Ibagué pero para Villavicencio -->
            <div class="form-container">
                <h2>Agregar Carro en Villavicencio</h2>
                <!-- Formulario para Villavicencio -->
                <div class="form-group">
                    <label for="villavicencio-marca">Marca:</label>
                    <input type="text" id="villavicencio-marca" placeholder="Ej: Kodiak">
                </div>
                <div class="form-group">
                    <label for="villavicencio-num-vehiculo">Número de Vehículo:</label>
                    <input type="text" id="villavicencio-num-vehiculo" placeholder="Ej: 12345">
                </div>
                <div class="form-group">
                    <label for="villavicencio-placa">Placa:</label>
                    <input type="text" id="villavicencio-placa" placeholder="Ej: ABC123">
                </div>
                <div class="form-group">
                    <label for="villavicencio-ciudad">Ciudad:</label>
                    <select id="villavicencio-ciudad">
                        <option value="Villavicencio">Villavicencio</option>
                        <option value="Granada">Granada</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="villavicencio-fecha">Fecha del Servicio:</label>
                    <input type="date" id="villavicencio-fecha">
                </div>
                <div class="form-group">
                    <label for="villavicencio-servicio">Servicio Realizado:</label>
                    <textarea id="villavicencio-servicio" placeholder="Describa el servicio o reparación realizada..."></textarea>
                </div>
                <div class="buttons">
                    <button id="villavicencio-agregar">Guardar</button>
                    <button id="villavicencio-limpiar">Limpiar</button>
                </div>
            </div>
            
            <div class="search-container">
                <div class="form-group">
                    <label for="villavicencio-buscar">Buscar:</label>
                    <input type="text" id="villavicencio-buscar" placeholder="Buscar por marca, placa, servicio...">
                </div>
            </div>
            
            <h2>Listado de Carros en Villavicencio</h2>
            <div id="villavicencio-tabla">
                <p class="empty-message">No hay carros registrados en Villavicencio</p>
            </div>
        </div>
        
        <!-- Ricaurte -->
        <div class="content" id="ricaurte">
            <!-- Contenido similar para Ricaurte -->
            <div class="form-container">
                <h2>Agregar Carro en Ricaurte</h2>
                <div class="form-group">
                    <label for="ricaurte-marca">Marca:</label>
                    <input type="text" id="ricaurte-marca" placeholder="Ej: Kodiak">
                </div>
                <div class="form-group">
                    <label for="ricaurte-num-vehiculo">Número de Vehículo:</label>
                    <input type="text" id="ricaurte-num-vehiculo" placeholder="Ej: 12345">
                </div>
                <div class="form-group">
                    <label for="ricaurte-placa">Placa:</label>
                    <input type="text" id="ricaurte-placa" placeholder="Ej: ABC123">
                </div>
                <div class="form-group">
                    <label for="ricaurte-fecha">Fecha del Servicio:</label>
                    <input type="date" id="ricaurte-fecha">
                </div>
                <div class="form-group">
                    <label for="ricaurte-servicio">Servicio Realizado:</label>
                    <textarea id="ricaurte-servicio" placeholder="Describa el servicio o reparación realizada..."></textarea>
                </div>
                <div class="buttons">
                    <button id="ricaurte-agregar">Guardar</button>
                    <button id="ricaurte-limpiar">Limpiar</button>
                </div>
            </div>
            
            <div class="search-container">
                <div class="form-group">
                    <label for="ricaurte-buscar">Buscar:</label>
                    <input type="text" id="ricaurte-buscar" placeholder="Buscar por marca, placa, servicio...">
                </div>
            </div>
            
            <h2>Listado de Carros en Ricaurte</h2>
            <div id="ricaurte-tabla">
                <p class="empty-message">No hay carros registrados en Ricaurte</p>
            </div>
        </div>
        
        <!-- Neiva -->
        <div class="content" id="neiva">
            <!-- Contenido similar para Neiva -->
            <div class="form-container">
                <h2>Agregar Carro en Neiva</h2>
                <div class="form-group">
                    <label for="neiva-marca">Marca:</label>
                    <input type="text" id="neiva-marca" placeholder="Ej: Kodiak">
                </div>
                <div class="form-group">
                    <label for="neiva-num-vehiculo">Número de Vehículo:</label>
                    <input type="text" id="neiva-num-vehiculo" placeholder="Ej: 12345">
                </div>
                <div class="form-group">
                    <label for="neiva-placa">Placa:</label>
                    <input type="text" id="neiva-placa" placeholder="Ej: ABC123">
                </div>
                <div class="form-group">
                    <label for="neiva-ciudad">Ciudad:</label>
                    <select id="neiva-ciudad">
                        <option value="Neiva">Neiva</option>
                        <option value="Garzón">Garzón</option>
                        <option value="Saldaña">Saldaña</option>
                        <option value="Florencia">Florencia</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="neiva-fecha">Fecha del Servicio:</label>
                    <input type="date" id="neiva-fecha">
                </div>
                <div class="form-group">
                    <label for="neiva-servicio">Servicio Realizado:</label>
                    <textarea id="neiva-servicio" placeholder="Describa el servicio o reparación realizada..."></textarea>
                </div>
                <div class="buttons">
                    <button id="neiva-agregar">Guardar</button>
                    <button id="neiva-limpiar">Limpiar</button>
                </div>
            </div>
            
            <div class="search-container">
                <div class="form-group">
                    <label for="neiva-buscar">Buscar:</label>
                    <input type="text" id="neiva-buscar" placeholder="Buscar por marca, placa, servicio...">
                </div>
            </div>
            
            <h2>Listado de Carros en Neiva</h2>
            <div id="neiva-tabla">
                <p class="empty-message">No hay carros registrados en Neiva</p>
            </div>
        </div>
    </div>

    <script>
        // Funciones de utilidad
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // Formatear fecha para mostrar en la tabla
        function formatDate(dateString) {
            if (!dateString) return 'N/A';
            
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return dateString; // Si no es una fecha válida
            
            return date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }

        // Función para guardar un carro
        function saveCar(city) {
            // Obtener valores del formulario
            const marca = document.getElementById(`${city}-marca`).value.trim();
            const numVehiculo = document.getElementById(`${city}-num-vehiculo`).value.trim();
            const placa = document.getElementById(`${city}-placa`).value.trim();
            const fecha = document.getElementById(`${city}-fecha`).value;
            const servicio = document.getElementById(`${city}-servicio`).value.trim();
            
            // Verificar campos obligatorios
            if (!marca || !placa || !servicio) {
                alert('Por favor complete los campos obligatorios: Marca, Placa y Servicio.');
                return;
            }
            
            // Obtener ciudad si existe el campo
            let ciudad = '';
            const ciudadElement = document.getElementById(`${city}-ciudad`);
            if (ciudadElement) {
                ciudad = ciudadElement.value;
            }
            
            // Obtener datos existentes
            const cars = JSON.parse(localStorage.getItem(`carros_${city}`)) || [];
            
            // Crear objeto de carro
            const newCar = {
                marca,
                numVehiculo,
                placa,
                ciudad,
                fecha,
                servicio
            };
            
            // Agregar a la lista
            cars.push(newCar);
            
            // Guardar en localStorage
            localStorage.setItem(`carros_${city}`, JSON.stringify(cars));
            
            // Limpiar formulario
            clearForm(city);
            
            // Recargar datos
            loadCars(city);
            
            alert('Carro guardado con éxito.');
        }

        // Función para limpiar formulario
        function clearForm(city) {
            document.getElementById(`${city}-marca`).value = '';
            document.getElementById(`${city}-num-vehiculo`).value = '';
            document.getElementById(`${city}-placa`).value = '';
            document.getElementById(`${city}-servicio`).value = '';
            
            // Restablecer fecha a hoy
            const today = new Date().toISOString().split('T')[0];
            document.getElementById(`${city}-fecha`).value = today;
            
            // Restablecer ciudad a la primera opción si existe el campo
            const ciudadElement = document.getElementById(`${city}-ciudad`);
            if (ciudadElement && ciudadElement.options.length > 0) {
                ciudadElement.selectedIndex = 0;
            }
        }

        // Función para buscar carros
        function searchCars(city) {
            const searchTerm = document.getElementById(`${city}-buscar`).value.toLowerCase();
            const cars = JSON.parse(localStorage.getItem(`carros_${city}`)) || [];
            
            // Si no hay término de búsqueda, mostrar todos
            if (!searchTerm) {
                loadCars(city);
                return;
            }
            
            // Filtrar carros
            const filteredCars = cars.filter(car => {
                return (
                    car.marca.toLowerCase().includes(searchTerm) ||
                    car.placa.toLowerCase().includes(searchTerm) ||
                    car.numVehiculo.toLowerCase().includes(searchTerm) ||
                    car.servicio.toLowerCase().includes(searchTerm) ||
                    (car.ciudad && car.ciudad.toLowerCase().includes(searchTerm))
                );
            });
            
            // Mostrar resultados
            displayFilteredCars(city, filteredCars);
        }

        // Función para mostrar carros filtrados
        function displayFilteredCars(city, filteredCars) {
            const tableContainer = document.getElementById(`${city}-tabla`);
            
            if (filteredCars.length === 0) {
                tableContainer.innerHTML = `<p class="empty-message">No se encontraron resultados para la búsqueda</p>`;
                return;
            }
            
            let tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Número Vehículo</th>
                            <th>Placa</th>
                            <th>Ciudad</th>
                            <th>Fecha</th>
                            <th>Servicio Realizado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            filteredCars.forEach((car, index) => {
                tableHTML += `
                    <tr>
                        <td>${car.marca}</td>
                        <td>${car.numVehiculo}</td>
                        <td>${car.placa}</td>
                        <td>${car.ciudad || capitalizeFirstLetter(city)}</td>
                        <td>${formatDate(car.fecha)}</td>
                        <td>${car.servicio}</td>
                        <td class="actions-cell">
                            <button class="btn-edit" onclick="editCar('${city}', ${index})">Editar</button>
                            <button class="btn-delete" onclick="deleteCar('${city}', ${index})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
            
            tableHTML += `
                    </tbody>
                </table>
            `;
            
            tableContainer.innerHTML = tableHTML;
        }

        // Función para editar un carro
        function editCar(city, index) {
            const cars = JSON.parse(localStorage.getItem(`carros_${city}`)) || [];
            
            if (index < 0 || index >= cars.length) {
                alert('Error: Carro no encontrado.');
                return;
            }
            
            const car = cars[index];
            
            // Llenar formulario con datos del carro
            document.getElementById(`${city}-marca`).value = car.marca;
            document.getElementById(`${city}-num-vehiculo`).value = car.numVehiculo;
            document.getElementById(`${city}-placa`).value = car.placa;
            document.getElementById(`${city}-fecha`).value = car.fecha;
            document.getElementById(`${city}-servicio`).value = car.servicio;
            
            // Si existe el campo ciudad, establecer valor
            const ciudadElement = document.getElementById(`${city}-ciudad`);
            if (ciudadElement && car.ciudad) {
                for (let i = 0; i < ciudadElement.options.length; i++) {
                    if (ciudadElement.options[i].value === car.ciudad) {
                        ciudadElement.selectedIndex = i;
                        break;
                    }
                }
            }
            
            // Eliminar el carro de la lista
            cars.splice(index, 1);
            localStorage.setItem(`carros_${city}`, JSON.stringify(cars));
            
            // Recargar datos
            loadCars(city);
            
            // Hacer scroll al formulario
            document.querySelector(`#${city} .form-container`).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Función para eliminar un carro
        function deleteCar(city, index) {
            if (!confirm('¿Está seguro de eliminar este registro?')) {
                return;
            }
            
            const cars = JSON.parse(localStorage.getItem(`carros_${city}`)) || [];
            
            if (index < 0 || index >= cars.length) {
                alert('Error: Carro no encontrado.');
                return;
            }
            
            // Eliminar el carro
            cars.splice(index, 1);
            
            // Guardar cambios
            localStorage.setItem(`carros_${city}`, JSON.stringify(cars));
            
     // Recargar datos
            loadCars(city);
        }
        // Función para cargar carros en la tabla
        function loadCars(city) {
            const cars = JSON.parse(localStorage.getItem(`carros_${city}`)) || [];
            displayFilteredCars(city, cars);
        }
        // Función para manejar el inicio de sesión
        document.getElementById('login-button').addEventListener('click', function() {
            const password = document.getElementById('password').value;
            // Aquí puedes agregar la lógica para verificar la contraseña
            // Por simplicidad, asumimos que la contraseña correcta es "admin"
            if (password === '1807') {
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('database-container').style.display = 'block';
                loadCars('ibague'); // Cargar carros de Ibagué al iniciar sesión
            } else {
                document.getElementById('error-message').textContent = 'Contraseña incorrecta. Intente de nuevo.';
                document.getElementById('login-container').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('login-container').classList.remove('shake');
                }, 500);
            }
        });
        // Evento para el botón de cerrar sesión
        document.getElementById('logout-button').addEventListener('click', function() {
            document.getElementById('database-container').style.display = 'none';
            document.getElementById('login-container').style.display = 'block';
            document.getElementById('password').value = '';
            document.getElementById('error-message').textContent = '';
        });
// Eventos para los botones de agregar y limpiar en cada ciudad
        document.querySelectorAll('[id$="-agregar"]').forEach(button => {
            button.addEventListener('click', function() {
                const city = this.id.split('-')[0];
                saveCar(city);
            });
        });
        document.querySelectorAll('[id$="-limpiar"]').forEach(button => {
            button.addEventListener('click', function() {
                const city = this.id.split('-')[0];
                clearForm(city);
            });
        });
        // Eventos para los campos de búsqueda
        document.querySelectorAll('[id$="-buscar"]').forEach(input => {
            input.addEventListener('input', function() {
                const city = this.id.split('-')[0];
                searchCars(city);
            });
        });
       // Cargar carros al inicio
loadCars('ibague'); // Cargar carros de Ibagué al inicio
// Evento para cambiar de pestaña
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remover la clase 'active' de todas las pestañas
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        
        // Ocultar todos los contenidos
        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
        
        // Agregar la clase 'active' a la pestaña clickeada
        this.classList.add('active');
        
        // Mostrar el contenido correspondiente
        const city = this.getAttribute('data-city');
        document.getElementById(city).classList.add('active');
    });
});
    </script>
</body>
</html>