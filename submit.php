<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'N/A';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : 'N/A';
    $age = isset($_POST['age']) ? htmlspecialchars($_POST['age']) : 'N/A';
    $recommendation = isset($_POST['dropdown']) ? htmlspecialchars($_POST['dropdown']) : 'N/A';
    $need = isset($_POST['need']) ? htmlspecialchars($_POST['need']) : 'N/A';
    $experiences = isset($_POST['experiences']) ? htmlspecialchars($_POST['experiences']) : 'N/A';

    // Collect checkbox values
    $paints = [];
    if (isset($_POST['paint1'])) $paints[] = "Sherwin-Williams";
    if (isset($_POST['paint2'])) $paints[] = "Benjamin Moore";
    if (isset($_POST['paint3'])) $paints[] = "Behr";

    // Display the submitted data
    echo "<h1>Thank you for your submission!</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Age:</strong> $age</p>";
    echo "<p><strong>Who recommended us:</strong> $recommendation</p>";
    echo "<p><strong>Type of painting needed:</strong> $need</p>";
    echo "<p><strong>Paints used:</strong> " . implode(", ", $paints) . "</p>";
    echo "<p><strong>Experiences:</strong> $experiences</p>";
}
?>