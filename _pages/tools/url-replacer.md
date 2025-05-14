---
title: "URL Space Replacer Tool"
permalink: /tools/url-replacer.html
description: "This tool replaces spaces in URLs with your specified encoding (default: %20)"
---
<style>
.main-container {
	max-width: 800px;
	margin: 20px auto;
}

.card {
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(5px);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	border: none;
	margin-bottom: 20px;
}

.encoding-input {
	max-width: 100px;
}
.form-control {
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid #dee2e6;
}
.form-control:focus {
	background-color: white;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn-primary {
	border: none;
	padding: 10px 20px;
	font-weight: 500;
	transition: all 0.3s ease;
}

.btn-primary:hover {
	transform: translateY(-2px);
}

.input-group-text {
	background-color: #f8f9fa;
}

.form-check {
	margin-top: 15px;
}

.copy-text {
  position:relative;
  padding:5px;
  background:#fff;
  border:1px solid #ddd;
  border-radius:5px;
  display:flex;
}

.copy-text button {
  padding:20px;
  background:#03a87c;
  color:#fff;
  font-size:20px;
  border:none;
  outline:none;
  border-radius:10px;
  cursor:pointer;
  transition: all 0.3s ease;
}
.copy-text button:hover {
  background:#028260;
  transform: translateY(-2px);
}

.copy-text button:after {
  content:"";
  position:absolute;
  top:-20px;
  right:25px;
  width:10px;
  height:10px;
  background:#5c81dc;
  transform:rotate(45deg);
  display:none;
}
.copy-text.active button:before,
.copy-text.active button:after {
  display:block;
}

.notification {
	padding: 10px;
	margin-bottom: 15px;
	border-radius: 4px;
	background-color: #fff3cd;
	color: #856404;
	border: 1px solid #ffeeba;
	display: none;
	animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}

</style>

<body>
<div class="main-container">
	<!-- Tool Container -->
	<div class="card">
		<div class="card-body">
			<div class="mb-3">
				<label for="inputUrl" class="form-label">Enter URL with spaces:</label>
				<textarea class="form-control" id="inputUrl" rows="3" placeholder="https://example.com/my file with multiple  spaces.txt"></textarea>
			</div>
			<div class="row mb-3">
				<div class="col-md-6">
					<label for="encodingFormat" class="form-label">Space encoding format:</label>
					<div class="input-group">
						<input type="text" class="form-control encoding-input" id="encodingFormat" placeholder="%20">
						<span class="input-group-text">(Default: %20)</span>
					</div>
				</div>
			</div>
			<div class="form-check form-switch mb-3">
				<input class="form-check-input" type="checkbox" id="trimSpaces" checked>
				<label class="form-check-label" for="trimSpaces">Trim excess spaces between words</label>
			</div>
			<div id="processNotification" class="notification mb-3">
                Please enter text to process
            </div>
			<div id="successNotification" class="notification notification-success mb-3">
				URL processed successfully!
			</div>
			<button id="processBtn" class="btn btn-primary">Process URL</button>
            <div class="mt-4">
                <label for="result" class="form-label">Result:</label>
				<div class="copy-text">
					<textarea class="form-control" id="result" rows="3" placeholder="Result will appear here..." style="background-color: transparent; border-color: transparent; line-height: 1.2; padding-left: 0.45rem" readonly></textarea>
					<button id="copyBtn" title="Copy to clipboard">
					  <i class="fa fa-clone"></i>
					</button>
				</div>
				<div id="copyNotification" class="notification mt-2">
                    There is no link processed for copying yet.
                </div>
            </div>
        </div>
		<div class="card-footer text-muted">
			<small>This tool replaces spaces in URLs with your specified encoding (default: %20)</small>
		</div>
	</div>
   </div> 
   
  {% include tool-ads.html %}

<script>
	document.addEventListener('DOMContentLoaded', function() {
		const processBtn = document.getElementById('processBtn');
		const copyBtn = document.getElementById('copyBtn');
		const inputUrl = document.getElementById('inputUrl');
		const encodingFormat = document.getElementById('encodingFormat');
		const trimSpaces = document.getElementById('trimSpaces');
		const result = document.getElementById('result');
		const processNotification = document.getElementById('processNotification');
        const copyNotification = document.getElementById('copyNotification');
		const successNotification = document.getElementById('successNotification');
		
		// Process URL when button is clicked
		processBtn.addEventListener('click', function() {
			let url = inputUrl.value.trim();
			let encoding = encodingFormat.value.trim();
			
			// Use default %20 if no encoding is specified
			if (!encoding) {
				encoding = '%20';
				encodingFormat.value = encoding;
			}
			
			if (url) {
				 processNotification.style.display = 'none';
				// Trim excess spaces if option is checked
				if (trimSpaces.checked) {
					url = url.replace(/\s+/g, ' ');
				}
				
				// Escape special regex characters in the encoding
				const escapedEncoding = encoding.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
				const encodedUrl = url.replace(new RegExp(' ', 'g'), encoding);
				result.value = encodedUrl;
				
				successNotification.style.display = 'block';
                
                // Hide notification after 5 seconds
                setTimeout(() => {
                    successNotification.style.display = 'none';
                }, 5000);
				
			} else {
				processNotification.style.display = 'block';
                
                // Hide notification after 5 seconds
                setTimeout(() => {
                    processNotification.style.display = 'none';
                }, 5000);
			}
		});
		
		// Copy result to clipboard
		copyBtn.addEventListener('click', function() {
			if (result.value) {
				copyNotification.style.display = 'none';
				navigator.clipboard.writeText(result.value).then(() => {
				// Change button text temporarily
				const originalText = copyBtn.innerHTML;
				copyBtn.innerHTML = '<i class="bi bi-check"></i>Copied!';
				setTimeout(() => {
					copyBtn.innerHTML = originalText;
				}, 5000);
			})
			.catch(err => {
                        console.error('Failed to copy text: ', err);
                        alert('Could not copy text. Your browser may not support this feature.');
                    });
			
			} else {
				// Show notification that there's nothing to copy
                copyNotification.style.display = 'block';
                
                // Hide notification after 5 seconds
                setTimeout(() => {
                    copyNotification.style.display = 'none';
                }, 5000);
			}
		});
		
		// Process on pressing Enter in the textarea
		inputUrl.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				processBtn.click();
			}
		});
	});
</script>
</body>
