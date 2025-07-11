<?php
if ($_POST) {
    // Get form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $age = $_POST['age'] ?? '';
    $referral = $_POST['referral'] ?? '';
    $painting_type = $_POST['painting-type'] ?? '';
    $timeline = $_POST['timeline'] ?? '';
    $budget = $_POST['budget'] ?? '';
    $service_level = $_POST['service-level'] ?? '';
    $contact_method = $_POST['contact-method'] ?? '';
    $urgency = $_POST['urgency'] ?? '';
    $experiences = $_POST['experiences'] ?? '';
    
    // Handle checkbox arrays
    $previous_paints = isset($_POST['previous-paints']) ? implode(', ', $_POST['previous-paints']) : '';
    
    // Your email address where you want to receive submissions
    $to_email = "your-email@example.com";
    $subject = "New Painting Survey Submission from " . $name;
    
    // Create email body
    $message = "New survey submission:\n\n";
    $message .= "Name: " . $name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Age: " . $age . "\n";
    $message .= "How they found us: " . $referral . "\n";
    $message .= "Painting type needed: " . $painting_type . "\n";
    $message .= "Previous paints used: " . $previous_paints . "\n";
    $message .= "Timeline: " . $timeline . "\n";
    $message .= "Budget: " . $budget . "\n";
    $message .= "Service level: " . $service_level . "\n";
    $message .= "Preferred contact: " . $contact_method . "\n";
    $message .= "Urgency: " . $urgency . "\n";
    $message .= "Additional comments: " . $experiences . "\n";
    
    // Set headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Send email
    if (mail($to_email, $subject, $message, $headers)) {
        $success_message = "Thank you! Your survey has been submitted successfully.";
    } else {
        $error_message = "Sorry, there was an error sending your submission. Please try again.";
    }
    
    // Optional: Save to a text file as backup
    $file = fopen("survey_submissions.txt", "a");
    fwrite($file, date("Y-m-d H:i:s") . " - " . $name . " - " . $email . "\n");
    fwrite($file, $message . "\n\n---\n\n");
    fclose($file);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Survey Form - PHP Version</title>
<link rel="stylesheet" href="survey.css">
</head>
<body>
<div class="form-container">

<?php if (isset($success_message)): ?>
    <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <?php echo $success_message; ?>
    </div>
<?php elseif (isset($error_message)): ?>
    <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <?php echo $error_message; ?>
    </div>
<?php endif; ?>

<h1>Survey Form</h1>
<p class="subtitle">Painting Services Survey</p>

<form id="survey-form" method="POST" action="">
  <!-- Basic Information -->
  <div class="form-section">
    <div class="section-title">Basic Information</div>
    
    <div class="form-row">
        <label class="required" for="name">Name:</label>
        <input id="name" name="name" type="text" placeholder="Enter your full name" required>
    </div>
    
    <div class="form-row">
        <label class="required" for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" required>
    </div>

    <div class="form-row">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="120" placeholder="18" required>
    </div>
  
    <div class="form-row">
        <label>What made you choose us?</label>
        <select name="referral">
          <option value="">Select an option</option>
          <option value="a friend">A friend</option> 
          <option value="realtor">Realtor</option>
          <option value="online-ad">Online ad</option>
        </select>
    </div>
  </div>

  <!-- Painting Requirements -->
  <div class="form-section">
    <div class="section-title">Painting Requirements</div>
    
    <p class="question-label">What kind of painting do you need?</p>
    <div class="radio-group">
        <div class="radio-item">
            <input type="radio" id="interior" name="painting-type" value="interior">
            <label for="interior">Interior</label>
        </div>
        <div class="radio-item">
            <input type="radio" id="exterior" name="painting-type" value="exterior">
            <label for="exterior">Exterior</label>
        </div>
        <div class="radio-item">
            <input type="radio" id="both" name="painting-type" value="both">
            <label for="both">Both interior and exterior</label>
        </div>
    </div>

    <p class="question-label">What kinds of paints have you used? (Check all that apply)</p>
    <div class="checkbox-group">
        <div class="checkbox-item">
            <input type="checkbox" name="previous-paints[]" value="Sherwin-Williams">
            <label>Sherwin-Williams</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" name="previous-paints[]" value="Benjamin Moore">
            <label>Benjamin Moore</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" name="previous-paints[]" value="Behr">
            <label>Behr</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" name="previous-paints[]" value="Other">
            <label>Other</label>
        </div>
    </div>
  </div>

  <!-- Project Details -->
  <div class="form-section">
    <div class="section-title">Project Details</div>
    
    <div class="form-row">
        <label>Timeline:</label>
        <select name="timeline">
          <option value="">Select timeline</option>
          <option value="within-1-month">Within 1 month</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="flexible">Flexible timing</option>
        </select>
    </div>

    <div class="form-row">
        <label>Budget range:</label>
        <select name="budget">
          <option value="">Select budget range</option>
          <option value="under-500">Under $500</option>
          <option value="500-1000">$500 - $1,000</option>
          <option value="1000-3000">$1,000 - $3,000</option>
          <option value="3000-5000">$3,000 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="over-10000">Over $10,000</option>
        </select>
    </div>
  </div>

  <!-- Contact Information -->
  <div class="form-section">
    <div class="section-title">Contact & Urgency</div>
    
    <p class="question-label">Preferred contact method:</p>
    <div class="radio-group">
        <div class="radio-item">
            <input type="radio" name="contact-method" value="phone">
            <label>Phone</label>
        </div>
        <div class="radio-item">
            <input type="radio" name="contact-method" value="email">
            <label>Email</label>
        </div>
        <div class="radio-item">
            <input type="radio" name="contact-method" value="text">
            <label>Text message</label>
        </div>
    </div>

    <p class="question-label">Project urgency:</p>
    <div class="radio-group">
        <div class="radio-item">
            <input type="radio" name="urgency" value="very-urgent">
            <label>Very urgent</label>
        </div>
        <div class="radio-item">
            <input type="radio" name="urgency" value="somewhat-urgent">
            <label>Somewhat urgent</label>
        </div>
        <div class="radio-item">
            <input type="radio" name="urgency" value="not-urgent">
            <label>Not urgent</label>
        </div>
    </div>
  </div>

  <!-- Additional Information -->
  <div class="form-section">
    <div class="section-title">Additional Information</div>
    
    <div class="form-row">
        <label for="experiences">Previous experiences or special requests:</label>
        <textarea id="experiences" name="experiences" rows="4" placeholder="Please share any previous experiences, concerns, or special requests..."></textarea>
    </div>
  </div>
    
    <input type="submit" value="Submit Survey">

</form>
</div>
</body>
</html>
