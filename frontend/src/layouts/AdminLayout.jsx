const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;