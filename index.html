<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "daily_daf";

// התחברות למסד הנתונים
$conn = new mysqli($servername, $username, $password, $database);

// בדיקת חיבור
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// חישוב הדף היומי
$startDate = new DateTime("2020-01-05");
$currentDate = new DateTime();
$daysPassed = $startDate->diff($currentDate)->days;

$sql = "SELECT masechet_name, total_pages FROM masechtot";
$result = $conn->query($sql);

$totalDaf = 0;
$dafYomi = "מחזור הושלם";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $totalDaf += $row["total_pages"];
        if ($daysPassed < $totalDaf) {
            $dafNumber = $daysPassed - ($totalDaf - $row["total_pages"]) + 1;
            $dafYomi = $row["masechet_name"] . " דף " . $dafNumber;
            break;
        }
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>דף יומי</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            direction: rtl;
            text-align: center;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>הדף היומי</h1>
    <p><?= $dafYomi ?></p>
</body>
</html>