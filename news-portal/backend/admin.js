document.addEventListener('DOMContentLoaded', function() {
    // Toggle Sidebar
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const adminContainer = document.querySelector('.admin-container');
    
    sidebarToggle.addEventListener('click', function() {
        adminContainer.classList.toggle('collapsed');
        
        // For mobile view
        if (window.innerWidth <= 992) {
            adminContainer.classList.toggle('show-sidebar');
        }
    });
    
    // Toggle Submenu
    const navItems = document.querySelectorAll('.sidebar-nav > ul > li');
    
    navItems.forEach(item => {
        if (item.querySelector('.submenu')) {
            item.addEventListener('click', function(e) {
                if (e.target.closest('a')) {
                    if (window.innerWidth > 992) {
                        e.preventDefault();
                        this.classList.toggle('active');
                    }
                }
            });
        }
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            if (!e.target.closest('.admin-sidebar') && !e.target.closest('.sidebar-toggle')) {
                adminContainer.classList.remove('show-sidebar');
            }
        }
    });
    
    // User dropdown
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        this.querySelector('.dropdown-menu').classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
    
    // Prevent dropdown close when clicking inside
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Table row actions
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            
            if (this.classList.contains('delete')) {
                if (confirm('Are you sure you want to delete this item?')) {
                    row.style.opacity = '0';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
            } else if (this.classList.contains('edit')) {
                alert('Edit functionality would be implemented here');
            }
        });
    });
    
    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth > 992) {
            adminContainer.classList.remove('show-sidebar');
        }
    }
    
    window.addEventListener('resize', handleResize);
});
