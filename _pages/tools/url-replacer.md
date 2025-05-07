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
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		border: none;
		margin-bottom: 20px;
	}

	}
	#result {
		min-height: 100px;
		background-color: rgba(255, 255, 255, 0.8);
	}
	.copy-btn {
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.copy-btn:hover {
		background-color: #e9ecef;
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
		background-color: #0d6efd;
		border: none;
		padding: 10px 20px;
		font-weight: 500;
		transition: all 0.3s ease;
	}
	.btn-primary:hover {
		background-color: #0b5ed7;
		transform: translateY(-2px);
	}
	.input-group-text {
		background-color: #f8f9fa;
	}
	.form-check {
		margin-top: 15px;
	}
	
	/* Ad container styles */
	.ads-container {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		margin-top: 30px;
	}
	.ad-unit {
		flex: 1;
		padding: 15px;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		text-align: center;
		border: 1px solid #dee2e6;
	}
	.ad-unit h5 {
		font-size: 16px;
		margin-bottom: 10px;
		color: #0d6efd;
	}
	.ad-unit p {
		font-size: 14px;
		margin-bottom: 15px;
		color: #495057;
	}
	.ad-unit .btn {
		font-size: 14px;
		padding: 6px 12px;
	}
	@media (max-width: 768px) {
		.ads-container {
			flex-direction: column;
			gap: 15px;
		}
	}
</style>

<body>
<div class="main-container">
	<!-- Tool Container -->
	<div class="card shadow">
		<div class="card-body">
			<div class="mb-3">
				<label for="inputUrl" class="form-label">Enter URL with spaces:</label>
				<textarea class="form-control" id="inputUrl" rows="3" placeholder="https://example.com/my  file  with  multiple  spaces.txt"></textarea>
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
			<button id="processBtn" class="btn btn-primary">Process URL</button>
			<div class="mt-4">
				<label for="result" class="form-label">Result:</label>
				<div class="input-group mb-3">
					<textarea class="form-control" id="result" rows="3" readonly></textarea>
					<button class="btn btn-outline-secondary copy-btn" type="button" id="copyBtn" title="Copy to clipboard">
						<i class="bi bi-clipboard"></i> Copy
					</button>
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
				// Trim excess spaces if option is checked
				if (trimSpaces.checked) {
					url = url.replace(/\s+/g, ' ');
				}
				
				// Escape special regex characters in the encoding
				const escapedEncoding = encoding.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
				const encodedUrl = url.replace(new RegExp(' ', 'g'), encoding);
				result.value = encodedUrl;
			} else {
				alert('Please enter a URL to process');
			}
		});
		
		// Copy result to clipboard
		copyBtn.addEventListener('click', function() {
			if (result.value) {
				result.select();
				document.execCommand('copy');
				
				// Change button text temporarily
				const originalText = copyBtn.innerHTML;
				copyBtn.innerHTML = '<i class="bi bi-check"></i> Copied!';
				setTimeout(() => {
					copyBtn.innerHTML = originalText;
				}, 2000);
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
